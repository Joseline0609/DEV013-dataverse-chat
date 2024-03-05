import { setRootElement, setRoutes, onURLChange } from "./router.js";
import { Welcome } from "./views/Welcome.js";
import { Home } from "./views/Home.js";
import IndividualChat from "./views/Individual.js";
import { GroupChat } from "./views/Group.js";
import NotFound from "./views/Notfound.js";

// import { computeStats } from "./dataFunctions.js";
// import { sortData } from "./dataFunctions.js";
// import { filterData } from "./dataFunctions.js";
// import { data } from "./data/data.js";
// import { renderItems } from "./components/CardsComponent.js";
// import { SearchByName } from "./components/SearchByNameInput.js";
// import { OrderBySelect } from "./components/OrderBySelect.js";
// import { Header } from "./components/Header.js";
// import { FilterByMenu } from "./components/FilterByMenu.js";

//This is a dictionary *
const routes = {
  "/": Welcome,
  "/Home": Home,
  "/Individual": IndividualChat,
  "/Group": GroupChat,
  "/Notfound": NotFound,
};

const mainContainer = document.getElementById("root");

setRoutes(routes);
setRootElement(mainContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);

  window.addEventListener("popstate", (event) => {
    //console.log(event);
    onURLChange(event.target.location.pathname);
  });
});

