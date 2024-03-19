import { userNameValue } from "./Welcome.js";
import { HomeIconButton } from "../components/HomeIconButton.js";

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
      <div id="scroll-area" class="scroll-area">
        <div id="chat-container" class="chat-container">
          <div class="plant-group-message">
            <p class="name">Plant name</p>
            <div class="first-plant">
              <p class="message">Hi 'user name'. How can we<br/>
                help you today?
              </p>
              <div class="plant-image">
                <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
                alt="Avatar" style="height:20px;width:20px";>
              </div>
            </div>
          </div>
          <div class="user-group-message">
            <p class="name">${userNameValue}</p>
            <p class="message">Hello how are you? Could you tell me when you bloom?</p>
          </div>
          <div class="plant-group-message">
            <p class="name">Plant name</p>
            <div class="first-plant">
              <p class="message">Sure, I use to have flowers in January</p>
              <div class="plant-image">
                <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
                alt="Avatar" style="height:20px;width:20px";>
              </div>
            </div>
          </div>
          <div class="plant-group-message">
            <p class="name">Plant name</p>
            <div class="second-plant">
              <p class="message">Hello, 'user name'!!! I don't have flowers, but I have beautiful leafs</p>
              <div class="plant-image">
                <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
                alt="Avatar" style="height:20px;width:20px";>
              </div>
            </div>
          </div>
          <div class="plant-group-message">
            <p class="name">Plant name</p>
            <div class="third-plant">
              <p class="message">In my case I boom in Autumn</p>
              <div class="plant-image">
                <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
                alt="Avatar" style="height:20px;width:20px";>
              </div>
            </div>
          </div>
          <div class="user-group-message">
            <p class="name">${userNameValue}</p>
            <p class="message">Hello how are you? Could you tell me when you bloom?</p>
          </div>
        </div>
      </div>
      <div id="text-box" class="text-box">
        <textarea placeholder=". . ." id="user-text" class="user-text" required></textarea>
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

  /**
   * This function adds the event to the submit button
   * creates the elements, adding all their properties
   * and then adds the text entered by the user to the DOM
   * and reset the textbox to be able to enter new text
   */

  sendButton.addEventListener("click", () => {
    sendingUserMessage();
  });

  const inputBox = viewGroupChat.querySelector("#user-text");
  inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendingUserMessage();
    }
  });

  // This function handles the sending of messages

  function sendingUserMessage() {
    const newMessage = document.getElementById("user-text");
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

      newMessage.value = ``;

      scrollToBottom();
    }
  }

  const butonsContainer = document.createElement("div");
  butonsContainer.className = "buttons-area";
  viewGroupChat.appendChild(butonsContainer);
  butonsContainer.append(HomeIconButton());

  function scrollToBottom() {
    const container = viewGroupChat.querySelector("#chat-container");
      container.scrollTop = container.scrollHeight - container.clientHeight;
  }

  return viewGroupChat;
};