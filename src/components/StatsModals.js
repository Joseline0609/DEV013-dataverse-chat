import { computeStats } from "../lib/dataFunctions.js";
import { data } from "../data/data.js";

export function StatsModals(category) {
  const statsComputed = computeStats(data);
  //console.log(statsComputed);  

  const viewStatsModal = document.createElement("dialog");
  viewStatsModal.id = "statistics-modal";
  viewStatsModal.className = "statistics-modal";
  viewStatsModal.innerHTML += `
    <h3 id="plant-category-modal">Plant Category</h3>
    <div class="statistics">
      <div class="graph-legend">
        <div class="legend">
          <div class="square water">
          </div>
          <p>Agua</p>
        </div>
        <div class="legend">
          <div class="square light">
          </div>
          <p>Luz</p>
        </div>
        <div class="legend">
          <div class="square care">
          </div>
          <p>Cuidado</p>
        </div>
        </div>
        <div class="statistics-totals">
        </div>
    </div>
    <h4>Qué cuidados necesita este tipo de plantas?</h4>
    <img class="close-button-stats" alt="Cerrar" src="../Resources/DV Chat/Close.png">
  `;

  const closeButton = viewStatsModal.querySelector(".close-button-stats");
  closeButton.addEventListener("click", () => { viewStatsModal.close()});
  renderStatisticsWords(category, viewStatsModal, statsComputed);

  return viewStatsModal;
}

// Statistics

function renderStatisticsWords(categoryPlant, statsModal, statsByCategory) {
  const plantCategory = statsModal.querySelector("#plant-category-modal");
  //console.log(plantCategory);

  plantCategory.innerHTML = categoryPlant;

  const waterAverageWord = document.createElement("h5");
  waterAverageWord.className = "water";

  const statisticsContainer = statsModal.querySelector(".statistics-totals");
  statisticsContainer.innerHTML = "";
  statisticsContainer.appendChild(waterAverageWord);

  if (statsByCategory[categoryPlant].average.waterAverage === 1) {
    waterAverageWord.innerHTML += "Poca";
  } else if (statsByCategory[categoryPlant].average.waterAverage === 2) {
    waterAverageWord.innerHTML += "Regular";
  } else if (statsByCategory[categoryPlant].average.waterAverage === 3) {
    waterAverageWord.innerHTML += "Mucha";
  }

  const lightAverageWord = document.createElement("h5");
  lightAverageWord.className = "light";

  statisticsContainer.appendChild(lightAverageWord);

  if (statsByCategory[categoryPlant].average.lightAverage === 1) {
    lightAverageWord.innerHTML += "Poca";
  } else if (statsByCategory[categoryPlant].average.lightAverage === 2) {
    lightAverageWord.innerHTML += "Regular";
  } else if (statsByCategory[categoryPlant].average.lightAverage === 3) {
    lightAverageWord.innerHTML += "Mucha";
  }

  const careAverageWord = document.createElement("h5");
  careAverageWord.className = "care";

  statisticsContainer.appendChild(careAverageWord);

  if (statsByCategory[categoryPlant].average.careAverage === 1) {
    careAverageWord.innerHTML += "Poca";
  } else if (statsByCategory[categoryPlant].average.careAverage === 2) {
    careAverageWord.innerHTML += "Regular";
  } else if (statsByCategory[categoryPlant].average.careAverage === 3) {
    careAverageWord.innerHTML += "Mucha";
  }
}