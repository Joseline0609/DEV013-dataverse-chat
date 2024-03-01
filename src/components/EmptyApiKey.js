import { navigateTo } from "../router.js";

export default function EmptyApiKey() {
  const viewEmptyModal = document.createElement("dialog");
  viewEmptyModal.className = "empty-key modal";
  viewEmptyModal.innerHTML += `
  <form id="epmty-apikey">
  <form method="dialog">
    <p class="message">
      No has ingresado una llave <br />
      para esta zona del jardín
    </p>
    <input type="text" required placeholder="Ingresa una Api Key..." /><br />
    <button id="send-key-button1">Enviar</button>
    <p class="link">
    Si no tienes una llave solicítala <br />
    haciendo click <a href="https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt" target="_blank">aquí</a>
  </p>
  <img id="close-icon1" class="close-icon" alt="Cerrar" src="Resources/DV Chat/Close.png">
  </form>
    `;

  const sendKeyButon1 = viewEmptyModal
    .querySelector("#send-key-button1")
    .addEventListener("click", () => {
      navigateTo("/Individual");
    });

  //TODO en temas de escalabilidad no es mejor hacerlo por nodos?
  const closeIcon1 = viewEmptyModal
    .querySelector("#close-icon1")
    .addEventListener("click", () => {
      viewEmptyModal.close();
    });

  return viewEmptyModal;
}
