export default function NotValidApiKey() {
  const viewValidModal = document.createElement("dialog");
  viewValidModal.innerHTML += `
  <form id="not-valid">
    <form method="dialog">
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
    </form>
      `;

  const closeButon2 = viewValidModal
    .querySelector("#close-button")
    .addEventListener("click", () => {
      viewValidModal.close();
      console.log("i want my modal");
    });

  return viewValidModal;
}
