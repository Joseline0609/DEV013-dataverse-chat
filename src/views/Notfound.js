import { navigateTo } from "../router.js";

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

  return viewNotFound;
}
