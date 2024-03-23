import { data } from "../data/data.js";
import { userNameValue } from "./Welcome.js";
import { GroupIconButton } from "../components/GroupIconButton.js";
import { HomeIconButton } from "../components/HomeIconButton.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export default function IndividualChat(props = {}) {
  // Function to identify and extract the data to render the corresponding view
  const propsIdValue = Object.values(props);
  function findPlant(plant) {
    return plant.id === propsIdValue[0];
  }

  // Template creation
  const currentPlant = data.find(findPlant);
  const viewIndividualChat = document.createElement("div");
  viewIndividualChat.className = "individual-chat-wrapper";

  viewIndividualChat.innerHTML += `
    <div id="chat-area" class="chat-area">
      <div id="info-area" class="info-area">
        <div class="plant-image">
          <img src="${currentPlant.imageUrl}"x>
        </div>
        <div class="text-area">
          <h1>${currentPlant.name}</h1>
          <p>${currentPlant.shortDescription}</p>
        </div>
      </div>
      <div id="chat-container" class="chat-container">
        <div class="plant-message">
          <p class="name">${currentPlant.name}</p>
          <p class="message">Hola ${userNameValue}.
            Te gustaría saber algo específico sobre una planta ${currentPlant.name} o sobre las plantas de categoría ${currentPlant.categoryPlant}?
          </p>
          <div class="plant-image">
            <img src="${currentPlant.imageUrl}";
              alt="Avatar">
          </div>
        </div>
      </div> 
      <div id="text-box" class="text-box">
        <textarea placeholder=". . ." id="user-text" class="user-text" required></textarea>
      </div> 
    </div>
    <div id="question-ideas" class="question-ideas">
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
    <div class="individual-view-buttons">
  </div>
  `;

  const textBox = viewIndividualChat.querySelector(".text-box");
  const sendButton = document.createElement("button");
  textBox.appendChild(sendButton);
  sendButton.id = "send-button";
  sendButton.className = "send-button";
  const sendIcon = document.createElement("img");
  sendButton.appendChild(sendIcon);
  sendIcon.src = "Resources/DV Chat/enviar.png";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-area";
  viewIndividualChat.appendChild(buttonsContainer);
  buttonsContainer.append(HomeIconButton(), GroupIconButton());

  // Variable to save the AI response
  let assistantResponse;
  // Is inserted into manageError()
  const link = "<a href='https://platform.openai.com/api-keys'> Link </a>";

  //--------------------------------------------

  // Function to execute the connection with OpenIA
  function conectOpenIA() {
    const newMessage = document.getElementById("user-text");
    const userMessage = newMessage.value;

    communicateWithOpenAI(currentPlant.id, userMessage)
      .then((response) => response.json())
      .then((data) => {
        assistantResponse = data;
        //console.log(assistantResponse);
        manejarRespuestaDeOpenIA();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Function to wait for the response of the request or show error message to the user
  async function manejarRespuestaDeOpenIA() {
    if (!assistantResponse.error) {
      // Call openIAResponse() after OpenAI response is available
      openIAResponse();
    } else if (assistantResponse.error) {
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
    errorMessage.innerHTML = `Hay un error con tu ApiKey </br> por favor verifica de que sea correcta </br> ó que aún tengas Tokens disponibles.</br> Puedes hacerlo desde este ${link}`;
  }

  //-------------------------------------------

  // Functions to manage the reception and insertion of messages in the DOM.

  /**
   * Functions to create the elements, adding all their properties
   * and then adds the text entered by the user and the response to the DOM
   */

  function sendingUserMessage() {
    const newMessage = document.getElementById("user-text");
    const chatContainer = document.getElementById("chat-container");
    const newMessageText = newMessage.value;

    //--------------------------
    // This function handles the sending of messages
    const expresion = /[^\W\d]/g;

    if (newMessageText.length !== 0 && newMessageText.match(expresion)) {
      const newMessageContainer = document.createElement("div");
      newMessageContainer.className = "user-message";
      chatContainer.appendChild(newMessageContainer);

      const userName = document.createElement("p");
      newMessageContainer.appendChild(userName);
      userName.className = "name";
      userName.innerHTML = userNameValue;

      const viewNewMessage = document.createElement("p");
      newMessageContainer.appendChild(viewNewMessage);
      viewNewMessage.className = "message";

      viewNewMessage.innerHTML = newMessageText;
    }
    scrollToBottom();
  }

  function openIAResponse() {
    if (
      assistantResponse &&
      assistantResponse.choices &&
      assistantResponse.choices.length > 0
    ) {
      // Bring the answer from the AI
      const assistantMessage = assistantResponse.choices[0].message.content;
      const chatContainer = document.getElementById("chat-container");

      //--------------------------
      const newResponseContainer = document.createElement("div");
      newResponseContainer.className = "plant-message";
      chatContainer.appendChild(newResponseContainer);

      const plantName = document.createElement("p");
      newResponseContainer.appendChild(plantName);
      plantName.className = "name";
      plantName.innerHTML = currentPlant.name;

      const viewNewResponse = document.createElement("p");
      newResponseContainer.appendChild(viewNewResponse);
      viewNewResponse.className = "message";

      const plantImageContainer = document.createElement("div");
      plantImageContainer.className = "plant-image";
      newResponseContainer.appendChild(plantImageContainer);
      const plantImage = document.createElement("img");
      plantImage.src = `${currentPlant.imageUrl}`;
      plantImage.style = "height:25px;width:18px";
      plantImageContainer.appendChild(plantImage);

      viewNewResponse.innerHTML = assistantMessage;
    }

    scrollToBottom();
  }

  // This function will be in charge of cleaning the textarea
  function clearMessage() {
    const newMessage = document.getElementById("user-text");
    //console.log(newMessage);
    newMessage.value = ``;
  }

  // Function to add scroll
  function scrollToBottom() {
    const container = viewIndividualChat.querySelector("#chat-container");
    container.scrollTop = container.scrollHeight - container.clientHeight;
  }

  //--------------------------------------

  // To print the messages with click
  sendButton.addEventListener("click", () => {
    sendingUserMessage();
    conectOpenIA();
    clearMessage();
    scrollToBottom();
  });

  // To print the messages with the enter key
  const inputBox = viewIndividualChat.querySelector("#user-text");
  inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendingUserMessage();
      conectOpenIA();
      clearMessage();
      scrollToBottom();
    }
  });

  return viewIndividualChat;
}