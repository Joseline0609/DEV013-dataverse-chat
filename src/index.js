import { setRootElement, setRoutes, onURLChange } from "./router.js";
import { Welcome } from "./views/Welcome.js";
import { Home } from "./views/Home.js";
import IndividualChat from "./views/Individual.js";
import { GroupChat } from "./views/Group.js";
import NotFound from "./views/Notfound.js";

/**
 * Creating the object
 * to asign the values of views
 * to pass the arguments to setRoutes
 */
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

/**
 * When HTML is loaded excecutes
 * onURLChange to change the url
 * and popstate to change the views acording this url
 */
document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);

  window.addEventListener("popstate", (event) => {
    //console.log(event);
    onURLChange(event.target.location.pathname);
  });
});
