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
      <div id="chat-container" class="chat-container">
        <div class="plant-message">
          <p class="name">Plant name</p>
          <div class="first-plant">
            <p class="message">Hi 'user name'. How can we<br/>
              help you today?
            </p>
            <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
              alt="Avatar" style="height:20px;width:20px";>
          </div>
        </div>
        <div class="user-message">
          <p class="name">User Name</p>
          <p class="message">Hello how are you? Could you tell me when you bloom?</p>
        </div>
        <div class="plant-message">
          <p class="name">Plant name</p>
          <div class="first-plant">
            <p class="message">Sure, I use to have flowers in January</p>
            <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
              alt="Avatar" style="height:20px;width:20px";>
          </div>
        </div>
        <div class="plant-message">
          <p class="name">Plant name</p>
          <div class="second-plant">
            <p class="message">Hello, 'user name'!!! I don't have flowers, but I have beautiful leafs</p>
            <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
              alt="Avatar" style="height:20px;width:20px";>
          </div>
        </div>
        <div class="plant-message">
          <p class="name">Plant name</p>
          <div class="third-plant">
            <p class="message">In my case I boom in Autumn</p>
            <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true"
              alt="Avatar" style="height:20px;width:20px";>
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
  const sendButton = document.createElement("button");
  textBox.appendChild(sendButton);

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
  viewGroupChat.appendChild(butonsContainer);
  butonsContainer.append(HomeIconButton());

  return viewGroupChat;
};
