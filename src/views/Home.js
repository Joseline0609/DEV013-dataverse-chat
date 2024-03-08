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
  //Keeps an array object in the original state
  const clonedData = structuredClone(data);
  console.log(clonedData);

  //----------------------
  //The data that is used and modified everywhere
  let currentData = data;
  console.log(currentData);

  //----------------------
  //Stores the value of orderBy button selected
  let activeSorting = 0;

  //----------------------
  //Calls computeStats function to create statistics and
  //keps it into a variable to be use by other functions
  //const statiscis = computeStats(clonedData);

  //----------------------
  //Calls renderItems function to render plants and
  //keps it into a variable to be use by other functions
  const cards = renderItems(currentData);

  //----------------------
  //Excecutes setListeners to activate buttons
  //setListeners();

  //----------------------
  //Gets the root element
  const mainContainer = viewHome.querySelector("#mainContainer");
  console.log(mainContainer);

  //----------------------
  //Cards is declared as a child of mainContainer
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
  //Clear page to don't overload the elements of the cardList
  //Must be call before changing curretData value

  const cardsContainer = viewHome.querySelector("#mainContainer");
  console.log(cardsContainer);
  function clearView() {
    cardsContainer.innerHTML = "";
  }

  // Filter by category flow ----------------------
  /**
   * Gets the category buttons, iterates them to add listeners to excecutes filterData
   * executes sort data if some option is active
   * @returns: new currentData
   */
  const categoryButtons = viewHome.querySelectorAll(".category");
  console.log(categoryButtons);
  
  categoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.target.getAttribute("data-category");
      console.log(category);
      currentData = filterData(data, "categoryPlant", category);
      console.log(currentData);
      if (activeSorting === 1) {
        sortData(currentData, "id", 1);
      } else if (activeSorting === 2) {
        sortData(currentData, "id", 2);
      }

      clearView();
      renderItems(currentData); /* algo esta fallando con renderItems*/
      //setListeners();
      return currentData;
    });
  });

  // // Filter by name flow ----------------------
  // /**
  //  * Gets the text box, sets the writen value, turns the firsf caracter to upper case
  //  * filteredName keeps filterData with the arguments to be use
  //  */
  const inputName = viewHome.querySelector("#input-name-home");
  console.log(inputName);
  
  function filterByName() {

    const inputReceive = inputName.value;
    console.log(inputReceive);

    const firstLetter = inputReceive[0].toUpperCase();
    console.log(firstLetter);
    const inputCorrected = firstLetter + inputReceive.slice(1);
    console.log(inputCorrected);

    const filteredName = filterData(clonedData, "name", inputCorrected);
    console.log(filteredName);
    clearView();
    renderItems(filteredName);
    //setListeners();
  }

  //Gets form element, adds listener submit
  //excecutes preventDefault to prevent going to the data file
  //and calls fiterByName() function
  viewHome.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    filterByName();
  });

  //Adds listener when enter is press and calls fiterByName() function
  const inputNameK = viewHome.querySelector("#input-name-home");
  console.log(inputNameK);
  inputName.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      filterByName();
    }
  });

  // Order by flow ----------------------
  /**
   * Gets the select element, adds the listener on change, gets the value of selection
   * if 3 is selected render cloneData, else executes sortData with index guiven
   */
  const dropdown = viewHome.querySelector("#item-order");
  console.log(dropdown);
  dropdown.addEventListener("change", () => {
    const i = dropdown.selectedIndex;
    console.log(i);
    if (i === 3) {
      clearView();  
      renderItems(clonedData);
      //setListeners();
      dropdown.selectedIndex = 0;
    } else {
      activeSorting = i;
      clearView();
      sortData(currentData, "id", i);
      renderItems(currentData);
      //setListeners();
    }
  });

  // // Statistics ----------------------
  // /**
  //  * This function creates the words to be insert into the statistics modal
  //  *
  //  * @param { property } categoryPlant - From object array
  //  * @param { id argument } statsModal - Modal box from HTML
  //  * @param { object } statsByCategory - Created new element
  //  */
  // function renderStatisticsWords(categoryPlant, statsModal, statsByCategory) {
  //   const plantCategory = statsModal.querySelector("#plant-category-modal");
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

  // Listeners -----------------------------------------------------------------------------------------------------------------
  /**
   * This sets the listeners to execute the functions
   * renderStatisticsWords
   * renderDescriptions
   * .show() and .close() methods to modasl
   */
  // function setListeners() {
  //   //TODO: - Ask why sometimes getElementsByClassName is not working?
  //   const statisticsButtons = document.querySelectorAll(
  //     ".modal-statistics-button"
  //   );
  //   statisticsButtons.forEach((button) => {
  //     button.addEventListener("click", () => {
  //       const categoryPlant = button.id;
  //       const statsModal = document.querySelector("#statistics-modal");
  //       renderStatisticsWords(categoryPlant, statsModal, statiscis);
  //       statsModal.showModal();
  //     });
  //   });

  // const closeButtonStats = document.querySelector(".close-button-stats");
  // closeButtonStats.addEventListener("click", () => {
  //   const statsModal = document.querySelector("#statistics-modal");
  //   statsModal.close();
  // });

  //}

  return viewHome;
};