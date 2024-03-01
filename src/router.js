let ROUTES = {};

let rootElement; // variable reference to html element uninitialized

/**
 * This function initializes rootElement with the value passed to the parameter
 * @param { expects  routes{} } newRootElementValue - which comes from index.js
 */
export const setRootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
};

/**
 * This function validates if newRoutesValue is an object
 * If this object contains a /Notfound file
 * ROUTES is assigned the value of newRoutesValue
 * converting RUTES into the param guiven
 * @param { in an object } newRoutesValue - from index.js
 */
export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object and doesnt exist /Notfound
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/Notfound"]) {
      ROUTES = newRoutesValue;
    }
  }
};

/**
 * This function renders the viu corresponding to
 * the route, the pathname and the props passed to the parameters
 * but if they are not valid, render /Notfound
 * @param { a string } pathname - the extention for url
 * @param { a string } props - the extention to find the specific item
 */
const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = "";
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/Notfound"]());
  }
};

/**
 * This function adds the pathname value to the history
 * to be able to return to that view later
 * by clicking the forward and back arrows in the browser
 * then call render view to render the view
 * corresponding to the given value of pathname and props
 *
 * @param { string } pathname - guiven in the event listener of buttons
 * @param { string } props - guiven in the event listener of buttons
 */
export const navigateTo = (pathname, props = {}) => {
  const URLvisited = pathname;
  history.pushState({}, "", URLvisited); // update window history with pushState
  //actualiza el navegador
  renderView(pathname, props); // render the view with the pathname and props
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location);
};
