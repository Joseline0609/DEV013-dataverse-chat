import { navigateTo } from "../router.js";
import { apiKeyValue } from "../views/Welcome.js";
import EmptyApiKey from "../components/EmptyApiKey.js";

export const GroupIconButton = () => {
  const buttonContainer = document.createElement("div");
  buttonContainer.innerHTML = `<button id="group-button" class="group-button"><img src="../Resources/DV Chat/groupIcon1.png"/></button>`;
  const goToGroupButton = buttonContainer.querySelector("#group-button");

  goToGroupButton.addEventListener("click", () => {
      // if apikey value is 0 then open modal
      // if apikey value is not 0 then navigate to
      if (apiKeyValue.length !== 0 ) {
        navigateTo("/Group", { title: "Group" });
      } else {
          const infoToNavigate = ["/Group", { title: "Group" }];
          //no estoy pasando el objeto de manera correcta 
          const emptyApiKeyViewModal = EmptyApiKey(infoToNavigate);
          buttonContainer.appendChild(emptyApiKeyViewModal);
          emptyApiKeyViewModal.showModal(); 
      }
    });
  return buttonContainer;
};
