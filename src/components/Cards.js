import { data } from "../data/data.js";
import { navigateTo } from "../router.js";

export const Cards = () => {
  const cardsContainer = document.createElement("ul");
  
  data.forEach((element) => {
    const cardItem = document.createElement("li");
    cardItem.innerHTML = `
      <li class="card-container ${element.categoryPlant}" itemscope itemtype="https://schema.org">
        <article id="front-card" class="front-card">
          <h2>${element.name}</h2>
          <h3>(${element.scientificName})</h3>
          <h4>${element.categoryPlant}</h4>
          <div class="top-card">
            <img alt="Plant Name" src="${element.imageUrl}">
            <dl itemscope itemtype="https://schema.org" class="facts">  
            <div class="amounts">
              <dt itemprop="water-amount" class="amount">Riego</dt>
              <dd>
                <img alt="Gota" src="../Resources/DV Chat/Agua activa.png" >
                <img alt="Gota" src="../Resources/DV Chat/Agua activa.png" >
                <img alt="Gota" class="inactiva" src="../Resources/DV Chat/Agua activa.png" >
              </dd>
            </div>
            <div class="amounts">
              <dt itemprop="light-amount" class="amount">Luz</dt>
              <dd>
                <img alt="Sol" src="../Resources/DV Chat/Luz activa.png" >
                <img alt="Sol" class="inactiva"  src="../Resources/DV Chat/Luz activa.png" >
                <img alt="Sol" class="inactiva"  src="../Resources/DV Chat/Luz activa.png">
              </dd>
            </div>
            <div class="amounts">
              <dt itemprop="care-amount" class="amount">Cuidado</dt>
              <dd>
                <img alt="Semaforo" src="../Resources/DV Chat/Cuidado activa.png" >
                <img alt="Semaforo" class="inactiva"  src="../Resources/DV Chat/Cuidado activa.png" >
                <img alt="Semaforo" class="inactiva"  src="../Resources/DV Chat/Cuidado activa.png" >
              </dd>
            </div>
            </dl>
          </div>
          <div class="buttons-container">
            <button class="stats-button"><img src="../Resources/DV Chat/stats.png" alt="Botón de estadísticas"/></button>
            <div class="individual-chat-button">
              <button id="individual-chat" class="individual-chat">
                Chatear
                <img src="../Resources/DV Chat/deserticaschat.png" alt="Chat Individual"/>
              </button>
            </div>
          </div>
        </article>
      </li>
    `;

    cardsContainer.appendChild(cardItem);

    const goToIndividualChat = cardItem.querySelector(
      ".individual-chat-button"
    );

    goToIndividualChat.addEventListener("click", () => {
      //aqui debo insertar algun dato de la planta
      // que le indique a Individual de qué planta se trata
      navigateTo("/Individual", { title: element.name, searchParams: { id: element.id }} );
      })
  });

  return cardsContainer;
};
