import { navigateTo } from "../router.js";

export default function EmptyApiKey() {
  const viewEmptyModal = document.createElement("dialog");
  viewEmptyModal.className = "empty-key modal";
  viewEmptyModal.innerHTML += `
    <form id="epmty-apikey" class="epmty-apikey" method="dialog">
      <p class="message">
        No has ingresado una llave <br />
        para esta zona del jardín
      </p>
      <input type="text" id="text" class="text" name="text" required placeholder="Ingresa una Api Key..." /><br />
      <button id="send-key-button1" class="send-key-button1">Enviar</button>
      <p class="link">
        Si no tienes una llave solicítala <br />
        haciendo click <a href="https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt" target="_blank">aquí</a>
      </p>
      </form>
  `;

  const sendKeyButon1 = viewEmptyModal
    .querySelector("#send-key-button1")
    .addEventListener("click", () => {
      navigateTo("/Individual");
    });
    
    const form = viewEmptyModal.querySelector(".epmty-apikey");
    const closeButton = document.createElement("img");
    form.appendChild(closeButton);
    closeButton.className = "close-icon1";
    closeButton.src = "Resources/DV Chat/Close.png";
    closeButton.addEventListener("click", () => { viewEmptyModal.close()});

  return viewEmptyModal;
}


