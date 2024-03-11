import { navigateTo } from "../router.js";
import EmptyApiKey from "../components/EmptyApiKey.js";
import NotValidApiKey from "../components/NotValidApiKey.js";

export default function NotFound() {
  const viewNotFound = document.createElement("div");
  viewNotFound.className = "not-found";

  viewNotFound.innerHTML += `
    <h1>404</h1>
    <p>Oh no!!</p>
    <p>
      Lamentamos que hayas<br />
      llegado al final del jardín
    </p>
    <p class="instruction">Para ver más plantas</p>
  `;

  const homeButton = document.createElement("button");
  viewNotFound.appendChild(homeButton);
  const textButton = document.createTextNode("Go home");
  homeButton.appendChild(textButton);

  homeButton.addEventListener("click", () => navigateTo("/Home"));

  const openModalEmptyApiKeyButton = document.createElement("button");
  viewNotFound.appendChild(openModalEmptyApiKeyButton);
  const textOpenButton = document.createTextNode("See empty key modal");
  openModalEmptyApiKeyButton.appendChild(textOpenButton);

  openModalEmptyApiKeyButton.addEventListener("click", () => {
    const emptyApiKeyViewModal = EmptyApiKey();
    viewNotFound.appendChild(emptyApiKeyViewModal);
    emptyApiKeyViewModal.showModal();
  });

  const openModaNotValidApiKeyButton = document.createElement("button");
  viewNotFound.appendChild(openModaNotValidApiKeyButton);
  const textValidButton = document.createTextNode("See not valid key modal");
  openModaNotValidApiKeyButton.appendChild(textValidButton);

  openModaNotValidApiKeyButton.addEventListener("click", () => {
    const notValidApiKeyViewModal = NotValidApiKey();
    viewNotFound.appendChild(notValidApiKeyViewModal);
    notValidApiKeyViewModal.showModal();
  });

  return viewNotFound;
}
