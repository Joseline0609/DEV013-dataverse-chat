import { navigateTo } from "../router.js";

export const GroupIconButton = () => {
  const buttonContainer = document.createElement("div");

  buttonContainer.innerHTML = `<button id="groupButton" class="groupButton"><img src="../Resources/DV Chat/groupIcon1.png"/> </button>`;

  const goToGroupButton = buttonContainer.querySelector("#groupButton");
  //console.log(goToGroupButton);

  goToGroupButton.addEventListener("click", () =>
    navigateTo("/Group", { name: "group" })
  );
  return buttonContainer;
};
