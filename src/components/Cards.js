import { data } from "../data/data.js";
import { navigateTo } from "../router.js";

const renderFactImages = (plant, cardItem) => {
  // Create static elements
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

  // 1 - Iterar en data forEach
  // 2 - Get facts by type
  const waterAmount = plant.facts.waterAmount;
  //console.log(waterAmount);
  const sunLight = plant.facts.sunLigth;
  //console.log(sunLight);
  const careDifficulty = plant.facts.careDifficulty;
  //console.log(careDifficulty);

  const waterArea = cardItem.querySelector(".water-icons");
  //console.log(waterArea);
  document.querySelector("#water");

  // 3 - condicionales
  // 3.1 repetir por fact
  // 3.2 water facts
  if (waterAmount === 1) {
    //4 dibujar 1 activa 2 inactivas
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2); //anadir clase
    waterActiveImage2.className = "inactive";
    waterArea.appendChild(waterActiveImage3); //anadir clase
    waterActiveImage3.className = "inactive";
  } else if (waterAmount === 2) {
    //4 dibujar 2 activas 1 inactiva
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2);
    waterArea.appendChild(waterActiveImage3); //anadir clase
    waterActiveImage3.className = "inactive";
  } else if (waterAmount === 3) {
    //4 dibujar 3 activas
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2);
    waterArea.appendChild(waterActiveImage3);
  }

  //Repeat for Light amount
  const lightArea = cardItem.querySelector(".light-icons");
  //console.log(lightArea);
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

  //Repeat for Care amount
  const careArea = cardItem.querySelector(".care-icons");
  //console.log(careArea);
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

//-------------------------------------------------------------------------------------------
export const renderItems = () => {
  const cardsContainer = document.createElement("ul");
  cardsContainer.id = "ul-cards";
  //console.log(cardsContainer);
  //console.log(data);
  // Modal containers creation
  const modalsContainer = document.createElement("div");
  modalsContainer.className = "modal-boxes";

  data.forEach((element) => {
    const statisticsButton = document.createElement("img");

    statisticsButton.className = "modal-statistics-button";
    statisticsButton.alt = "Estadísticas";
    statisticsButton.src = "../Resources/DV Chat/statics.png";
    statisticsButton.id = element.categoryPlant;

    // Creating stats Modal
    const statsModal = document.createElement("dialog");

    statsModal.id = "statistics-modal";
    statsModal.className = "statistics-modal";
    statsModal.innerHTML += `
            <h3 id="plant-category-modal">Plant Category</h3>
            <div class="statistics">
              <div class="graph-legend">
                <div class="legend">
                  <div class="square water"></div>
                  <p>Agua</p>
                </div>
                <div class="legend">
                  <div class="square light"></div>
                  <p>Luz</p>
                </div>
                <div class="legend">
                  <div class="square care"></div>
                  <p>Cuidado</p>
                </div>
              </div>
              <div class="statistics-totals">
              </div>
            </div>
            <h4>Qué cuidados necesita este tipo de plantas?</h4>
            <img class="close-button-stats" alt="Cerrar" src="../Resources/DV Chat/Close.png">`;

    const cardItem = document.createElement("li");
    //console.log(cardItem);
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

    //stats, description and reverse buttons
    const icons = cardItem.querySelector("#icons");
    //console.log(icons);
    // document.querySelector("#icons");
    icons.appendChild(statisticsButton);

    //Adding the modals to the card
    modalsContainer.appendChild(statsModal);

    //-----------------------------------------------------------------------------

    const goToIndividualChat = cardItem.querySelector(
      ".individual-chat-button"
    );
    //console.log(goToIndividualChat);

    goToIndividualChat.addEventListener("click", () => {
      navigateTo("/Individual", { name: "Bienvenida al chat" });
    });
  });

  //Modals are added outside the UI card representation
  cardsContainer.insertAdjacentElement("afterend", modalsContainer);

  return cardsContainer;
};
