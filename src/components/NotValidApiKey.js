import { navigateTo } from "../router.js";

export default function NotValidApiKey() {

  const viewValidModal = document.createElement("dialog");
  viewValidModal.className = "valid-key modal";
  viewValidModal.innerHTML += `
    <form id="not-valid" class="not-valid" method="dialog">
      <p>
        Tu llave no abre esta zona del jardín. <br/>
        Ingresa una llave válida
      </p>
      <input type="text" id="text" class="text" required placeholder="Ingresa Api Key válida..." /><br />
      <button id="send-key-button2" class="send-key-button2">Enviar</button>
      <p class="link">
        Si no tienes una llave solicítala <br />
        haciendo click <a href="https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt" target="_blank">aquí</a>
      </p>
    </form>
  `;

  const sendKeyButon2 = viewValidModal
  viewValidModal.querySelector("#send-key-button2");
  sendKeyButon2.addEventListener("click", () => {
    navigateTo("/Group");
  });

  const form = viewValidModal.querySelector(".not-valid");
  const closeButton2 = document.createElement("img");
  form.appendChild(closeButton2);
  closeButton2.className = "close-icon2";
  closeButton2.src = "Resources/DV Chat/closered.png";
  closeButton2.addEventListener("click", () => { viewValidModal.close()});

  return viewValidModal;
}
