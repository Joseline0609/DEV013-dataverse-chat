//import {HomeIconButton} from "../components/HomeIconButton.js";

export const GroupChat = () =>  {
  const viewGroupChat = document.createElement("section");
  viewGroupChat.className="group-chat";

  viewGroupChat.innerHTML = `<div class="group-view">

  <section id="chat-area" class="chat-area">
    <div class="title">
      <h1 id="title">Chat Grupal</h1>
    </div>
    <div class="message-area">
    <div class="messages">
      <div class="first-user-message">
        <p>Hola, cómo están? Pueden decirme en que mes florecen?</p>
      </div>
      <div class="plant-answer">
        <img alt="" src="" />
        <p>Hola, yo </p>
      </div>
      <div class="plant-answer">
        <img alt="" src="" />
        <p>Hola, yo </p>
      </div>
      <div class="plant-answer">
        <img alt="" src="" />
        <p>Hola, yo </p>
      </div>
      </div>
      <div class="textarea-group">
      <textarea placeholder="Escribe tu mensaje aca" id="textarea-group" 
      class="textarea-group-inside" required>
      </textarea>
      <button><img alt="" src=""/></button>
      </div>
    </div>
</section>
<div class="other">
<section id="questions-ideas">
  <div class="questions-title">
    <h2>Puedes iniciar tu chat preguntando </br>
      acerca de estas temáticas</h2>
  </div>
  <div class="question-topics">
    <ul>
      <li>Familia Botánica</li>
      <li>Cuidados</li>
      <li>Floración</li>
      <li>Mantenimiento</li>
      <li>Usos</li>
    </ul>
  </div>
</section>
<div class="group-background">
  <img src="../Resources/DV Chat/group-background.png" alt="fondo-chat-grupal" />
</div>
</div>
</div>
  `;
  return viewGroupChat;
}
