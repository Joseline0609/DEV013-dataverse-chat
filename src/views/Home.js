import { GroupIconButton } from "../components/GroupIconButton.js";
import { renderItems } from "../components/Cards.js";
import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import { SearchByName } from "../components/SearchByNameInput.js";
import { OrderBySelect } from "../components/OrderBySelect.js";
import { FilterByMenu } from "../components/FilterByMenu.js";

// import { computeStats } from "../lib/dataFunctions.js";
// import { sortData } from "../lib/dataFunctions.js";
// import { filterData } from "../lib/dataFunctions.js";
// import { data } from "../data/data.js";

export const Home = () => {
  const viewHome = document.createElement("section");

  viewHome.append(
    Header(),
    SearchByName(),
    FilterByMenu(),
    OrderBySelect(),
    GroupIconButton(),
    renderItems(),
    Footer()
  );

  //----------------------------------------------

  



}