import { navigateTo } from "../router.js";
import { apiKeyValue } from "../views/Welcome.js";
import { keyValueFromModal } from "../components/EmptyApiKey.js"
import EmptyApiKey from "../components/EmptyApiKey.js";

export const GroupIconButton = () => {
  const buttonContainer = document.createElement("div");
  buttonContainer.innerHTML = `<button id="group-button" class="group-button"><img src="../Resources/DV Chat/groupIcon1.png"/></button>`;
  const goToGroupButton = buttonContainer.querySelector("#group-button");

  goToGroupButton.addEventListener("click", () => {
      if (window.localStorage["keyName"].length !== 0 || apiKeyValue.length !== 0 || keyValueFromModal.length !== 0) { //add ||localstorage is not empty
        navigateTo("/Group", { title: "Group" });
      } else {
          const infoToNavigate = ["/Group", { title: "Group" }]; 
          const emptyApiKeyViewModal = EmptyApiKey(infoToNavigate);
          buttonContainer.appendChild(emptyApiKeyViewModal);
          emptyApiKeyViewModal.showModal(); 
      }
    });
    
  return buttonContainer;
};
