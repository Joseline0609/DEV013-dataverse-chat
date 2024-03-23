import { navigateTo } from "../router.js";
import { StatsModals } from "./StatsModals.js";
import { apiKeyValue } from "../views/Welcome.js";
import EmptyApiKey from "../components/EmptyApiKey.js";
import { keyValueFromModal } from "../components/EmptyApiKey.js";
//import { setApiKey } from "../lib/apikey.js";

const renderFactImages = (plant, cardItem) => {
  const waterActiveImage = document.createElement("img");
  waterActiveImage.alt = "Gota";
  waterActiveImage.src = "../Resources/DV Chat/Agua activa.png";

  const waterActiveImage2 = document.createElement("img");
  waterActiveImage2.alt = "Gota";
  waterActiveImage2.src = "../Resources/DV Chat/Agua activa.png";

  const waterActiveImage3 = document.createElement("img");
  waterActiveImage3.alt = "Gota";
  waterActiveImage3.src = "../Resources/DV Chat/Agua activa.png";

  const lightActiveImage = document.createElement("img");
  lightActiveImage.alt = "Luz";
  lightActiveImage.src = "../Resources/DV Chat/Luz activa.png";

  const lightActiveImage2 = document.createElement("img");
  lightActiveImage2.alt = "Luz";
  lightActiveImage2.src = "../Resources/DV Chat/Luz activa.png";

  const lightActiveImage3 = document.createElement("img");
  lightActiveImage3.alt = "Luz";
  lightActiveImage3.src = "../Resources/DV Chat/Luz activa.png";

  const careActiveImage = document.createElement("img");
  careActiveImage.alt = "Semaforo";
  careActiveImage.src = "../Resources/DV Chat/Cuidado activa.png";

  const careActiveImage2 = document.createElement("img");
  careActiveImage2.alt = "Semaforo";
  careActiveImage2.src = "../Resources/DV Chat/Cuidado activa.png";

  const careActiveImage3 = document.createElement("img");
  careActiveImage3.alt = "Semaforo";
  careActiveImage3.src = "../Resources/DV Chat/Cuidado activa.png";

  // 1 - Iterate through data with forEach
  // 2 - Get facts by type
  const waterAmount = plant.facts.waterAmount;
  const sunLight = plant.facts.sunLight;
  const careDifficulty = plant.facts.careDifficulty;

  // 3 - conditionals
  // The ‘inactive’ class will be used to decrease the image opacity

  const waterArea = cardItem.querySelector(".water-icons");
  document.querySelector("#water");

  if (waterAmount === 1) {
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2);
    waterActiveImage2.className = "inactive";
    waterArea.appendChild(waterActiveImage3);
    waterActiveImage3.className = "inactive";
  } else if (waterAmount === 2) {
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2);
    waterArea.appendChild(waterActiveImage3);
    waterActiveImage3.className = "inactive";
  } else if (waterAmount === 3) {
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2);
    waterArea.appendChild(waterActiveImage3);
  }

  // --------------------

  const lightArea = cardItem.querySelector(".light-icons");
  document.querySelector("#light");

  if (sunLight === 1) {
    lightArea.appendChild(lightActiveImage);
    lightActiveImage2.className = "inactive";
    lightArea.appendChild(lightActiveImage2);
    lightActiveImage3.className = "inactive";
    lightArea.appendChild(lightActiveImage3);
  } else if (sunLight === 2) {
    lightArea.appendChild(lightActiveImage);
    lightArea.appendChild(lightActiveImage2);
    lightActiveImage3.className = "inactive";
    lightArea.appendChild(lightActiveImage3);
  } else if (sunLight === 3) {
    lightArea.appendChild(lightActiveImage);
    lightArea.appendChild(lightActiveImage2);
    lightArea.appendChild(lightActiveImage3);
  }

  // --------------------

  const careArea = cardItem.querySelector(".care-icons");
  document.querySelector("#care");

  if (careDifficulty === 1) {
    careArea.appendChild(careActiveImage);
    careActiveImage2.className = "inactive";
    careArea.appendChild(careActiveImage2);
    careActiveImage3.className = "inactive";
    careArea.appendChild(careActiveImage3);
  } else if (careDifficulty === 2) {
    careArea.appendChild(careActiveImage);
    careArea.appendChild(careActiveImage2);
    careActiveImage3.className = "inactive";
    careArea.appendChild(careActiveImage3);
  } else if (careDifficulty === 3) {
    careArea.appendChild(careActiveImage);
    careArea.appendChild(careActiveImage2);
    careArea.appendChild(careActiveImage3);
  }
};

//-------------------------

export const renderItems = (data) => {
  const cardsContainer = document.createElement("ul");
  cardsContainer.id = "ul-cards";

  // Modal containers creation-----------------

  const modalsContainer = document.createElement("div");
  modalsContainer.className = "modal-boxes";

  data.forEach((element) => {
    const statisticsButton = document.createElement("img");

    statisticsButton.className = "modal-statistics-button";
    statisticsButton.alt = "Estadísticas";
    statisticsButton.src = "../Resources/DV Chat/stats.png";
    statisticsButton.id = element.categoryPlant;

    statisticsButton.addEventListener("click", () => {
      const statsViewModal = StatsModals(element.categoryPlant);
      cardsContainer.appendChild(statsViewModal);
      statsViewModal.showModal();
    });

    // Cards containers creation-----------------
    
    const cardItem = document.createElement("li");
    cardItem.innerHTML = `
  <li class="card-container ${element.categoryPlant}" itemscope itemtype="https://schema.org">
    <article id="front-card" class="front-card">
      <h2>${element.name}</h2>
      <h3>${element.scientificName}</h3>
      <h4>${element.categoryPlant}</h4>
      <div class="top-card">
        <img alt="Plant Name" src="${element.imageUrl}">
        <dl itemscope itemtype="https://schema.org" class="facts">
            <div class="amounts" id="water">
                    <dt class="amount" id="water-amounts">Agua</dt>
                    <dd class="water-icons">
                    </dd>
                  </div>
                  <div class="amounts" id="light">
                    <dt class="amount" id="water-amounts">Luz</dt>
                    <dd class="light-icons"> 
                    </dd>
                  </div>
                  <div class="amounts" id="care">
                    <dt class="amount" id="water-amounts">Cuidado</dt>
                    <dd class="care-icons">
                    </dd>
                  </div>
                </dl>
            </div>
       <div class="buttons-container">
        <div class="statics-button" id="icons">
        </div>
        <div class="individual-chat-button">
          <button id="individual-chat" class="individual-chat">
          <p class="text">CHATEAR </p>
          </button>
          <img src="../Resources/DV Chat/deserticaschat.png" alt="Chat Individual"/>
        </div>
      </div>
    </article>`;

    cardsContainer.appendChild(cardItem);

    renderFactImages(element, cardItem);

    const icons = cardItem.querySelector("#icons");

    icons.appendChild(statisticsButton);

    //-------------------------

    const goToIndividualChat = cardItem.querySelector(
      ".individual-chat-button"
    );

    goToIndividualChat.addEventListener("click", () => {
      
      //silocalstorage no es 0 debe ir directo
      if (window.localStorage.length !== 0) { 
          navigateTo("/Individual", {
          title: element.name,
          searchParams: { id: element.id }});
        } else {
          const infoToNavigate = ["/Individual", { title: element.name, searchParams: { id: element.id } }];
          const emptyApiKeyViewModal = EmptyApiKey(infoToNavigate);
          cardItem.appendChild(emptyApiKeyViewModal);
          emptyApiKeyViewModal.showModal();
        }
      });
      
    });

  return cardsContainer;
};
