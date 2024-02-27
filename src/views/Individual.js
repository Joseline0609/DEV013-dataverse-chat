import { GroupIconButton } from "../components/GroupIconButton.js";
import { HomeIconButton } from "../components/HomeIconButton.js";
//import { navigateTo } from "../router.js";

export default function IndividualChat() {
  const viewIndividualChat = document.createElement("div");

  viewIndividualChat.innerHTML += `
    <div id="chat-area">
      <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true">
      <h1>Plant Name</h1>
      <p>Short description Lorem Ipsum es<br/>
        simplemente el texto de relleno de<br/>
        las imprentas y archivos de texto.
      </p>
      <div id="chat-container">
        <div class="plant-message">
          <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
            alt="Avatar" style="height:20px;width:20px";>
          <p>Hi 'user name'. I'm 'plant name'<br/>
            Would you like to ask me something?
          </p>
        </div>
        <div class="user-message">
          <p>Hi plant, I want to know how much water you need</p>
        </div>
      </div>
      <textarea placeholder="..." id="user-text" required></textarea>
<!--<button type="submit" id="send-button" class="send-button">Send</button>-->
    </div>
  `;
  viewIndividualChat.append(HomeIconButton(), GroupIconButton());

  const groupButton = document.createElement("button");
  viewIndividualChat.appendChild(groupButton);
  const textButton = document.createTextNode("Go group chat");
  groupButton.appendChild(textButton);

  groupButton.addEventListener("click", () => {
    navigateTo("/Group", props);
  });

  const homeButton = document.createElement("button");
  viewIndividualChat.appendChild(homeButton);
  const text = document.createTextNode("Go home");
  homeButton.appendChild(text);

  homeButton.addEventListener("click", () => {
    navigateTo("/Home", props);
  });

  const sendButton = document.createElement("button");
  viewIndividualChat.appendChild(sendButton);
  sendButton.id = "send-button";
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
    const viewNewMessage = document.createElement("p");
    newMessageContainer.appendChild(viewNewMessage);
    //agregarle todas sus propiedades incluido el contenido
    //agregarlo a la colección de mensajes hacienco click
    viewNewMessage.innerHTML = newMessage.value;
    //resetear text area
    newMessage.value = `...`;
    //darle funcion al enter
  });

  return viewIndividualChat;
}
