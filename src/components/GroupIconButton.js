import { navigateTo } from "../router.js";

export const GroupIconButton = () => {
  const buttonContainer = document.createElement("div");

  buttonContainer.innerHTML = `<button id="group-button" class="group-button"><img src="../Resources/DV Chat/groupIcon1.png"/> </button>`;

  const goToGroupButton = buttonContainer.querySelector("#group-button");

  goToGroupButton.addEventListener("click", () =>
    navigateTo("/Group", { name: "group" })
  );

  return buttonContainer;
};
