import { navigateTo } from "../router.js";

export default function NotValidApiKey() {
  const viewValidModal = document.createElement("dialog");
  viewValidModal.className = "valid-key modal";
  viewValidModal.innerHTML += `
  <form id="not-valid">
    <form id="not-valid" method="dialog">
      <p>
      Tu llave no abre esta zona del jardín. <br/>
      Ingresa una llave válida
      </p>
      <input type="text" required placeholder="Ingresa Api Key válida..." /><br />
      <button id="send-key-button2">Enviar</button>
      <p>
      Si no tienes una llave solicítala <br />
      haciendo click <a href="https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt" target="_blank">aquí</a>
    </p>
      <img id="close-icon2" alt="Cerrar" src="Resources/DV Chat/closered.png">
    </form>
      `;

  const sendKeyButon2 = viewValidModal
    .querySelector("#send-key-button2")
    .addEventListener("click", () => {
      navigateTo("/Group");
    });

  //TODO en temas de escalabilidad no es mejor hacerlo por nodos?
  const closeIcon2 = viewValidModal
    .querySelector("#close-icon2")
    .addEventListener("click", () => {
      viewValidModal.close();
    });

  // TODO: Add function to close icon

  return viewValidModal;
}
