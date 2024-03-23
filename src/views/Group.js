import { userNameValue } from "./Welcome.js";
import { HomeIconButton } from "../components/HomeIconButton.js";
import { data } from "../data/data.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export const GroupChat = () => {
  const viewGroupChat = document.createElement("div");
  viewGroupChat.className = "group-chat-wrapper";

  viewGroupChat.innerHTML = `
    <div id="chat-area" class="chat-area">
      <div id="info-area" class="info-area">
        <div class="text-area">
          <h1 class="title" id="title">Chat Grupal</h1>
        </div>
      </div>
      <div id="chat-container" class="chat-container">
        <div class="plant-group-message">
          <p class="name">Todas</p>
          <div class="first-plant">
            <p class="message">Hola ${userNameValue}. Cuales son tus dudas sobre las plantas?
            </p>
            <div class="plant-image">
              <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
              alt="Avatar">
            </div>
          </div>
        </div>
      </div>
      <div id="text-box" class="text-box">
        <textarea placeholder=". . ." id="user-text-group" class="user-text" required></textarea>
      </div>
    </div>
    <div class="question-ideas">
      <h2>Puedes iniciar tu chat preguntando </br>
        acerca de estas temáticas:
      </h2>
      <ul class="question-topics">
        <li>Familia Botánica</li>
        <li>Cuidados</li>
        <li>Floración</li>
        <li>Mantenimiento</li>
        <li>Usos</li>
      </ul>
    </div>
  `;

  const textBox = viewGroupChat.querySelector(".text-box");
  // Create the button with all it's attributes
  const sendButton = document.createElement("button");
  textBox.appendChild(sendButton);
  sendButton.id = "send-button";
  sendButton.className = "send-button";
  const sendIcon = document.createElement("img");
  sendButton.appendChild(sendIcon);
  sendIcon.src = "Resources/DV Chat/enviar.png";

  const butonsContainer = document.createElement("div");
  butonsContainer.className = "buttons-area";
  viewGroupChat.appendChild(butonsContainer);
  butonsContainer.append(HomeIconButton());

  //-------------------------------------------

  // Is inserted into manageError()
  const link = "<a href='https://platform.openai.com/api-keys'> Link </a>";

  //--------------------------------------------

  //aqui se debe hacer el random
  // primero elegir de manera randonm la cantidad de plantas entre 2 y 8.
  // con ese numero elegir de manera random
  //la planta que va a contestar sin que se repita el numero
  const randomNumberOfPlants = getRandomNumberOfPlants(2, 5);
  function getRandomNumberOfPlants(min, max) {
    return Math.random() * (max - min) + min;
  }

  const plantArray = [];
  for (let i = 0; i < randomNumberOfPlants; i++) {
    plantArray.push(data[Math.floor(Math.random()*data.length)]);
    //asegurarse que no se repitan
  }

  // Function to execute the connection with OpenIA
  function conectOpenIA() {
    const userNewMessage = viewGroupChat.querySelector("#user-text-group");
    const newMessage = userNewMessage.value;
    // console.log(newMessage);

    plantArray.forEach((plant) => {

      communicateWithOpenAI(plant.id, newMessage)
        .then((response) => response.json())
        .then((plantResponse) => {
          manejarRespuestaDeOpenIA(plantResponse, plant);
        })
        .catch((error) => {
          console.log(error);
        });

    });
    
  }

  async function manejarRespuestaDeOpenIA(plantResponse, plant) {
    if (!plantResponse.error) {
      // Call openIAResponse() after OpenAI response is available
      openIAResponse(plantResponse, plant);
    } else if (plantResponse.error) {
      manageError();
    }
  }

  // This function will insert an alert in the chat when there is an error with the api key
  function manageError() {
    const chatContainer = document.getElementById("chat-container");
    const errorMessageContainer = document.createElement("div");
    errorMessageContainer.className = "error-message";
    const errorMessage = document.createElement("p");
    chatContainer.appendChild(errorMessageContainer);
    errorMessageContainer.appendChild(errorMessage);
    errorMessage.innerHTML = `Hay un error con tu ApiKey. </br> Por favor verifica de que sea correcta </br> ó que aún tengas "tokens" disponibles.</br> Puedes hacerlo desde este ${link}`;
  }

  //-------------------------------------------


  // This function handles the sending of messages

  function sendingUserMessage() {
    const newMessage = document.getElementById("user-text-group");
    const chatContainer = document.getElementById("chat-container");
    const newMessageText = newMessage.value;

    const expresion = /[^\W\d]/g;
    if (newMessageText.length !== 0 && newMessageText.match(expresion)) {
      const newMessageContainer = document.createElement("div");
      newMessageContainer.className = "user-group-message";
      chatContainer.appendChild(newMessageContainer);

      const userName = document.createElement("p");
      newMessageContainer.appendChild(userName);
      userName.className = "name";
      userName.innerHTML = userNameValue;

      const viewNewMessage = document.createElement("p");
      newMessageContainer.appendChild(viewNewMessage);
      viewNewMessage.className = "message";

      viewNewMessage.innerHTML = newMessageText;

      // newMessage.value = ``;

      scroll();
    }
  }

  //----------------------------------

  function openIAResponse(plantResponse, plant) {
    if (
      plantResponse &&
    plantResponse.choices &&
    plantResponse.choices.length > 0
    ) {
    // Bring the answer from the AI
      const assistantMessage = plantResponse.choices[0].message.content;
      const chatContainer = document.getElementById("chat-container");

      //--------------------------
      const newResponseContainer = document.createElement("div");
      newResponseContainer.className = "plant-message";
      chatContainer.appendChild(newResponseContainer);

      const plantName = document.createElement("p");
      newResponseContainer.appendChild(plantName);
      plantName.className = "name";
      plantName.innerHTML = plant.name;

      const viewNewResponse = document.createElement("p");
      newResponseContainer.appendChild(viewNewResponse);
      viewNewResponse.className = "message";

      const plantImageContainer = document.createElement("div");
      plantImageContainer.className = "plant-image";
      newResponseContainer.appendChild(plantImageContainer);
      const plantImage = document.createElement("img");
      plantImage.src = `${plant.imageUrl}`;
      plantImage.style = "height:25px;width:18px";
      plantImageContainer.appendChild(plantImage);

      viewNewResponse.innerHTML = assistantMessage;
    }

    scroll();
  }

  // This function will be in charge of cleaning the textarea
  function clearMessage() {
    const newMessage = document.getElementById("user-text-group");
    newMessage.value = ``;
  }


  function scroll() {
    const chatcontainer = viewGroupChat.querySelector("#chat-container");
    chatcontainer.scrollTop = chatcontainer.scrollHeight - chatcontainer.clientHeight;
  }

  /**
   * This function adds the event to the submit button
   * creates the elements, adding all their properties
   * and then adds the text entered by the user to the DOM
   * and reset the textbox to be able to enter new text
   */

  sendButton.addEventListener("click", () => {
    sendingUserMessage();
    conectOpenIA();
    clearMessage();
    scroll();
  });

  const inputBox = viewGroupChat.querySelector("#user-text-group");
  inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendingUserMessage();
      conectOpenIA();
      clearMessage();
      scroll();
    }
  });

  return viewGroupChat;
};