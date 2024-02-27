import { navigateTo } from "../router.js";
import EmptyApiKey from "../components/EmptyApiKey.js";
import NotValidApiKey from "../components/NotValidApiKey.js";

export default function NotFound() {
  const viewNotFound = document.createElement("div");

  viewNotFound.innerHTML += `
    <h1>404</h1>
    <p>Oh no!!</p>
    <p>
      Lamentamos que hayas<br />
      llegado al final del jardín
    </p>
    <p>Para ver más plantas</p>
  `;

  const homeButton = document.createElement("button");
  viewNotFound.appendChild(homeButton);
  const textButton = document.createTextNode("Go home");
  homeButton.appendChild(textButton);

  homeButton.addEventListener("click", () => navigateTo("/Home"));

  const openModal1Button = document.createElement("button");
  viewNotFound.appendChild(openModal1Button);
  const textOpenButton = document.createTextNode("See empty key modal");
  openModal1Button.appendChild(textOpenButton);

  openModal1Button.addEventListener("click", () => {
    const viewModal1 = EmptyApiKey();
    openModal1Button.appendChild(viewModal1);
    viewModal1.showModal();
  });

  const openModal2Button = document.createElement("button");
  viewNotFound.appendChild(openModal2Button);
  const textValidButton = document.createTextNode("See not valid key modal");
  openModal2Button.appendChild(textValidButton);

  openModal2Button.addEventListener("click", () => {
    const viewModal2 = NotValidApiKey();
    openModal2Button.appendChild(viewModal2);
    viewModal2.showModal();
  });

  return viewNotFound;
}
