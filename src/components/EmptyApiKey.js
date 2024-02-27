export default function EmptyApiKey() {
  const viewEmptyModal = document.createElement("dialog");
  viewEmptyModal.innerHTML += `
  <form id="epmty-apikey">
  <form method="dialog">
    <p>
      No has ingresado una llave <br />
      para esta zona del jardín
    </p>
    <input type="text" required placeholder="Ingresa una Api Key..." /><br />
    <button id="close-function">Enviar</button>
    <p>
    Si no tienes una llave solicítala <br />
    haciendo click <a href="https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt" target="_blank">aquí</a>
  </p>
  </form>
    `;

  //TODO en temas de escalabilidad no es mejor hacerlo por nodos?
  const closeButon = viewEmptyModal
    .querySelector("#close-function")
    .addEventListener("click", () => {
      viewEmptyModal.close();
    });

  return viewEmptyModal;
}
