import { Header } from "../components/Header.js";
import { SearchByName } from "../components/SearchByNameInput.js";
import { FilterByMenu } from "../components/FilterByMenu.js";
import { OrderBySelect } from "../components/OrderBySelect.js";
import { renderItems } from "../components/Cards.js";
import { GroupIconButton } from "../components/GroupIconButton.js";
import { Footer } from "../components/Footer.js";

//import { computeStats } from "../lib/dataFunctions.js";
import { sortData } from "../lib/dataFunctions.js";
import { filterData } from "../lib/dataFunctions.js";
import { data } from "../data/data.js";

//----------------------------------------------------------------

export const Home = () => {
  const viewHome = document.createElement("section");
  const mainC = document.createElement("main");
  mainC.id="mainContainer";

  viewHome.appendChild(Header());
  viewHome.appendChild(SearchByName());
  viewHome.appendChild(FilterByMenu());
  viewHome.appendChild(OrderBySelect());
  // viewHome.appendChild(renderItems());
  viewHome.appendChild(mainC);
  viewHome.appendChild(GroupIconButton());
  viewHome.appendChild(Footer());

  //----------------------------------------------
  const clonedData = structuredClone(data);
  //console.log(clonedData);
  let currentData = data;
  //console.log(currentData);
  let activeSorting = 0;
  //const statiscis = computeStats(clonedData);
  const cards = renderItems(currentData);
  //setListeners();
  const mainContainer = viewHome.querySelector("#mainContainer");
  //console.log(mainContainer);

  mainContainer.appendChild(cards);

  // ----------------------

  const resetPage = viewHome.querySelectorAll(".logo");
  console.log(resetPage);
  Array.from(resetPage).forEach((element) => {
    element.addEventListener("click", () => {
      clearView();
      renderItems(clonedData);
    });
  });

  //----------------------

  const cardsContainer = viewHome.querySelector("#mainContainer");
  //console.log(cardsContainer);
  function clearView() {
    cardsContainer.innerHTML = "";
  }

  // Filter by category flow 
  const categoryButtons = viewHome.querySelectorAll(".category");
  //console.log(categoryButtons);
  
  categoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.target.getAttribute("data-category");
      //console.log(category);
      currentData = filterData(data, "categoryPlant", category);
      //console.log(currentData);
      
      if (activeSorting === 1) {
        sortData(currentData, "id", 1);
      } else if (activeSorting === 2) {
        sortData(currentData, "id", 2);
      }

      clearView();
      mainContainer.appendChild(renderItems(currentData));
      //setListeners();
      return currentData;
    });
  });

  // Filter by name flow 
  const inputName = viewHome.querySelector("#input-name-home");
  //console.log(inputName);
  
  function filterByName() {

    const inputReceive = inputName.value;
    //console.log(inputReceive);

    const firstLetter = inputReceive[0].toUpperCase();
    //console.log(firstLetter);
    const inputCorrected = firstLetter + inputReceive.slice(1);
    //console.log(inputCorrected);

    const filteredName = filterData(clonedData, "name", inputCorrected);
    //console.log(filteredName);
    clearView();
    mainContainer.appendChild(renderItems(filteredName));
    //setListeners();
  }

  viewHome.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    filterByName();
  });

  inputName.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      filterByName();
    }
  });

  // Order by flow ----------------------
  const dropdown = viewHome.querySelector("#item-order");
  //console.log(dropdown);
  dropdown.addEventListener("change", () => {
    const i = dropdown.selectedIndex;
    //console.log(i);
    if (i === 3) {
      clearView();  
      renderItems(clonedData);
      //setListeners();
      dropdown.selectedIndex = 0;
    } else {
      activeSorting = i;
      clearView();
      sortData(currentData, "id", i);
      mainContainer.appendChild(renderItems(currentData));
      //setListeners();
    }
  });

  // Statistics

  // function renderStatisticsWords(categoryPlant, statsModal, statsByCategory) {
  //   const plantCategory = statsModal.querySelector("#plant-category-modal");
  //   console.log(plantCategory);

  //   plantCategory.innerHTML = categoryPlant;

  //   const waterAverageWord = document.createElement("h5");
  //   waterAverageWord.className = "water";

  //   const statisticsContainer = statsModal.querySelector(".statistics-totals");
  //   statisticsContainer.innerHTML = "";
  //   statisticsContainer.appendChild(waterAverageWord);

  //   if (statsByCategory[categoryPlant].average.waterAverage === 1) {
  //     waterAverageWord.innerHTML += "Poca";
  //   } else if (statsByCategory[categoryPlant].average.waterAverage === 2) {
  //     waterAverageWord.innerHTML += "Regular";
  //   } else if (statsByCategory[categoryPlant].average.waterAverage === 3) {
  //     waterAverageWord.innerHTML += "Mucha";
  //   }

  //   const lightAverageWord = document.createElement("h5");
  //   lightAverageWord.className = "light";

  //   statisticsContainer.appendChild(lightAverageWord);

  //   if (statsByCategory[categoryPlant].average.lightAverage === 1) {
  //     lightAverageWord.innerHTML += "Poca";
  //   } else if (statsByCategory[categoryPlant].average.lightAverage === 2) {
  //     lightAverageWord.innerHTML += "Regular";
  //   } else if (statsByCategory[categoryPlant].average.lightAverage === 3) {
  //     lightAverageWord.innerHTML += "Mucha";
  //   }

  //   const careAverageWord = document.createElement("h5");
  //   careAverageWord.className = "care";

  //   statisticsContainer.appendChild(careAverageWord);

  //   if (statsByCategory[categoryPlant].average.careAverage === 1) {
  //     careAverageWord.innerHTML += "Poca";
  //   } else if (statsByCategory[categoryPlant].average.careAverage === 2) {
  //     careAverageWord.innerHTML += "Regular";
  //   } else if (statsByCategory[categoryPlant].average.careAverage === 3) {
  //     careAverageWord.innerHTML += "Mucha";
  //   }
  // }

  // // Listeners 

  // function setListeners() {
  //   const statisticsButtons = document.querySelectorAll(
  //     ".modal-statistics-button"
  //   );
  //   console.log(statisticsButtons);

  //   statisticsButtons.forEach((button) => {
  //     button.addEventListener("click", () => {
  //       const categoryPlant = button.id;
  //       const statsModal = document.querySelector("#statistics-modal");
  //       renderStatisticsWords(categoryPlant, statsModal, statiscis);
  //       statsModal.showModal();
  //     });
  //   });

  //   // const closeButtonStats = document.querySelector(".close-button-stats");
  //   // closeButtonStats.addEventListener("click", () => {
  //   //   const statsModal = document.querySelector("#statistics-modal");
  //   //   statsModal.close();
  //   // });

  // }

  return viewHome;
};