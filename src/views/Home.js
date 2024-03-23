import { Header } from "../components/Header.js";
import { SearchByName } from "../components/SearchByNameInput.js";
import { FilterByMenu } from "../components/FilterByMenu.js";
import { OrderBySelect } from "../components/OrderBySelect.js";
import { renderItems } from "../components/Cards.js";
import { GroupIconButton } from "../components/GroupIconButton.js";
import { Footer } from "../components/Footer.js";
import { sortData, filterData } from "../lib/dataFunctions.js";
import { data } from "../data/data.js";


export const Home = () => {
  const viewHome = document.createElement("section");
  viewHome.className = "home";
  const mainC = document.createElement("main");
  mainC.id = "mainContainer";

  // Components are declared as childs of Home 
  
  viewHome.appendChild(Header());
  viewHome.appendChild(SearchByName());
  viewHome.appendChild(FilterByMenu());
  viewHome.appendChild(OrderBySelect());
  viewHome.appendChild(mainC);
  viewHome.appendChild(Footer());
  viewHome.appendChild(GroupIconButton());

  //---------------------------------

  // Keeps an array object in the original state
  const clonedData = structuredClone(data);

  // The data that is used and modified everywhere
  let currentData = data;

  // Stores the value of orderBy button selected
  let activeSorting = 0;

  // Calls renderItems function to render plants and
  // keps it into a variable to be use by other functions
  const cards = renderItems(currentData);

  const mainContainer = viewHome.querySelector("#mainContainer");

  // Cards is declared as a child of mainContainer
  mainContainer.appendChild(cards);

  //--------------------------------

  const cardsContainer = viewHome.querySelector("#mainContainer");

  function clearView() {
    cardsContainer.innerHTML = "";
  }

  // Filter by category flow --------------------
  /**
   * Gets the category buttons, iterates them to add listeners to excecutes filterData
   * executes sort data if some option is active
   */

  const categoryButtons = viewHome.querySelectorAll(".category");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.target.getAttribute("data-category");
      currentData = filterData(data, "categoryPlant", category);

      if (activeSorting === 1) {
        sortData(currentData, "id", 1);
      } else if (activeSorting === 2) {
        sortData(currentData, "id", 2);
      }

      clearView();
      mainContainer.appendChild(renderItems(currentData));
      return currentData;
    });
  });

  // Filter by name flow --------------------
  /**
   * Gets the text box, sets the writen value, turns the firsf caracter to upper case
   * filteredName keeps filterData with the arguments to be use
   */

  const inputName = viewHome.querySelector("#input-name-home");

  function filterByName() {
    const inputReceive = inputName.value;
    const firstLetter = inputReceive[0].toUpperCase();
    const inputCorrected = firstLetter + inputReceive.slice(1);
    const filteredName = filterData(clonedData, "name", inputCorrected);

    clearView();
    mainContainer.appendChild(renderItems(filteredName));
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

  // Order by flow -------------------------
  /**
   * Gets the select element, adds the listener on change, gets the value of selection
   * if 3 is selected render cloneData, else executes sortData with index guiven
   */

  const dropdown = viewHome.querySelector("#item-order");

  dropdown.addEventListener("change", () => {
    const i = dropdown.selectedIndex;
    if (i === 3) {
      clearView();

      mainContainer.appendChild(renderItems(clonedData));
      dropdown.selectedIndex = 0;
    } else {
      activeSorting = i;
      clearView();
      sortData(currentData, "id", i);
      mainContainer.appendChild(renderItems(currentData));
    }
  });

  return viewHome;
};