import { GroupIconButton } from "../components/GroupIconButton.js";
import { Cards } from "../components/Cards.js";
import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import { SearchByName } from "../components/SearchByNameInput.js";
import { OrderBySelect } from "../components/OrderBySelect.js";
import { FilterByMenu } from "../components/FilterByMenu.js";

export const Home = () => {
  const viewHome = document.createElement("section");

  viewHome.append(
    Header(),
    SearchByName(),
    FilterByMenu(),
    OrderBySelect(),
    Cards(),
    GroupIconButton(),
    Footer()
  );

  return viewHome;
};
