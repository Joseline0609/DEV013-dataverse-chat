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
      <button id="close-button">Enviar</button>
      <p>
      Si no tienes una llave solicítala <br />
      haciendo click <a href="https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt" target="_blank">aquí</a>
    </p>
      <img id="close-icon" alt="Cerrar" src="Resources/DV Chat/closered.png">
    </form>
      `;

  const closeButon2 = viewValidModal
    .querySelector("#close-button")
    .addEventListener("click", () => {
      viewValidModal.close();
    });

  // TODO: Add function to close icon

  return viewValidModal;
}
