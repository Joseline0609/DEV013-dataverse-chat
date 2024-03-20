import { navigateTo } from "../router.js";

export default function EmptyApiKey(infoToNavigate) {
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
        haciendo click <a href="https://platform.openai.com/api-keys" target="_blank">aquí</a>
      </p>
    </form>
  `;

  const sendKeyButon1 = viewEmptyModal
  viewEmptyModal.querySelector("#send-key-button1")
  sendKeyButon1.addEventListener("click", () => {
    // obtener valor del textbox
    // validarlo
    // si es valido acceder
    // si no es valido cambiar el estilo
    console.log("info " + infoToNavigate);
    console.log("pathname " + infoToNavigate[0]);
    console.log("title " + infoToNavigate[1]);
    //no esta llegando la info de manera correcta
    if (infoToNavigate[0] == "/Group") {
      navigateTo("/Group", { title: "Group" });
    } else {
      navigateTo("/Group", { title: "Group" });
    }
    //si es "/Individual que pasa?"
    // por que no se cierra y se queda en home?
  });
    
  // const form = viewEmptyModal.querySelector("#epmty-apikey");
  const closeButton = document.createElement("img");
  viewEmptyModal.appendChild(closeButton);
  closeButton.className = "close-icon1";
  closeButton.src = "Resources/DV Chat/Close.png";
  closeButton.addEventListener("click", () => { viewEmptyModal.close()});

  return viewEmptyModal;
}


