import { GroupIconButton } from "../components/GroupIconButton.js";
import { HomeIconButton } from "../components/HomeIconButton.js";
//import { navigateTo } from "../router.js";

export default function IndividualChat() {
  const viewIndividualChat = document.createElement("div");
  viewIndividualChat.className = "individual-chat-wrapper";

  viewIndividualChat.innerHTML += `
    <div id="chat-area" class="chat-area">
      <div id="info-area" class="info-area">
        <div>
          <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true">
        </div>
        <div class="text-area">
          <h1>Plant Name</h1>
          <p>Short description Lorem Ipsum es
            simplemente el texto de relleno de
            las imprentas y archivos de texto.
          </p>
        </div>
      </div>
      <div id="chat-container" class="chat-container">
        <div class="plant-message">
          <p class="name">Plant name</p>
          <p class="message">Hi 'user name'. I'm 'plant name'<br/>
            Would you like to ask me something?
          </p>
          <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
            alt="Avatar" style="height:20px;width:20px";>
        </div>
        <div class="user-message">
          <p class="name">User Name</p>
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
  // viewIndividualChat.appendChild(sendButton);
  sendButton.id = "send-button";
  sendButton.className = "send-button";
  const sendText = document.createTextNode("send");
  sendButton.appendChild(sendText);

  sendButton.addEventListener("click", () => {
    //Obtener el texto del text area
    const newMessage = document.getElementById("user-text");
    //crear el contenedor
    const chatContainer = document.getElementById("chat-container");
    const newMessageContainer = document.createElement("div");
    newMessageContainer.className = "user-message";
    chatContainer.appendChild(newMessageContainer);
    //crear un elemento p
    const userName = document.createElement("p");
    newMessageContainer.appendChild(userName);
    userName.className = "name";
    userName.innerHTML = "User Name";
    const viewNewMessage = document.createElement("p");
    newMessageContainer.appendChild(viewNewMessage);
    viewNewMessage.className = "message";
    //agregarle todas sus propiedades incluido el contenido
    //agregarlo a la colección de mensajes hacienco click
    viewNewMessage.innerHTML = newMessage.value;
    //resetear text area
    newMessage.value = ``;
    //darle funcion al enter
  });

  const butonsContainer = document.createElement("div");
  butonsContainer.className = "butons-area";
  viewIndividualChat.appendChild(butonsContainer);
  butonsContainer.append(HomeIconButton(), GroupIconButton());

  return viewIndividualChat;
}
