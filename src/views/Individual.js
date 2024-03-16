import { data } from "../data/data.js";
import { userNameValue } from "./Welcome.js";
import { GroupIconButton } from "../components/GroupIconButton.js";
import { HomeIconButton } from "../components/HomeIconButton.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export default function IndividualChat(props = {}) {

  const propsIdValue = Object.values(props);
  function findPlant(plant) {
    return plant.id === propsIdValue[0];
  }

  const currentPlant = data.find(findPlant);
  const viewIndividualChat = document.createElement("div");
  viewIndividualChat.className = "individual-chat-wrapper";

  viewIndividualChat.innerHTML += `
    <div id="chat-area" class="chat-area">
      <div id="info-area" class="info-area">
        <div>
          <img src="${currentPlant.imageUrl}" style="height:85px;width:55px";>
        </div>
        <div class="text-area">
          <h1>${currentPlant.name}</h1>
          <p>${currentPlant.shortDescription}</p>
        </div>
      </div>
      <div id="chat-container" class="chat-container">
        <div class="plant-message">
          <p class="name">${currentPlant.name}</p>
          <p class="message">Hi 'user name'. I'm 'plant name'<br/>
            Would you like to ask me something?
          </p>
          <img src="${currentPlant.imageUrl}";
            alt="Avatar" style="height:25px;width:18px";>
        </div>
        <div class="user-message">
          <p class="name">${userNameValue}</p>
          <p class="message">Hi plant, I want to know how much water you need</p>
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

  /**
 * This function adds the event to the submit button
 * creates the elements, adding all their properties
 * and then adds the text entered by the user to the DOM
 * and reset the textbox to be able to enter new text
 */
  sendButton.addEventListener("click", () => {
    sendingUserMessage();
    communicateWithOpenAI("Begonia", "Cuantas veces necesitas ser regada?")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

      }).catch((error) => {
        console.log(error);

      });

  });

  const inputBox = viewIndividualChat.querySelector("#user-text");
  inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendingUserMessage();
    }
  });

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
      newMessage.value = ``;
    }
  }

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-area";
  viewIndividualChat.appendChild(buttonsContainer);
  buttonsContainer.append(HomeIconButton(), GroupIconButton());

  return viewIndividualChat;
}