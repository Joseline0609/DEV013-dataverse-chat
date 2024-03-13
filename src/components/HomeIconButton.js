import { navigateTo } from "../router.js";

export const HomeIconButton = () => {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "homeButtonContainer";
  buttonContainer.innerHTML = `<button class="homeButton" id="homeButton"><img src="../Resources/DV Chat/homeIcon.png"/> </button>`;
  const goToHomeButton = buttonContainer.querySelector("#homeButton");

  goToHomeButton.addEventListener("click", () =>
    navigateTo("/Home", { title: "Home" })
  );
  return buttonContainer;
};
