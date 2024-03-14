let ROUTES = {};

let rootElement; // variable reference to html element uninitialized

/**
 * This function initializes rootElement with the value passed to the parameter
 * @param { expects routes{} } newRootElementValue - which comes from index.js
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

// This function recieves the url and convert it to an object

const queryStringToObject = (queryString) => {
  const newURL = new URLSearchParams(queryString);
  const urlToParam = Object.fromEntries(newURL);
  return urlToParam;
}

/**
 * This function renders the view corresponding to
 * the route, https://www.30secondsofcode.org/js/s/query-string-to-object/the pathname and the props passed to the parameters
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
 * @param { string } pathname - given in the event listener of buttons
 * @param { string } props - given in the event listener of buttons
 */

export const navigateTo = (pathname, props = {}) => {
  // convert the object to a string
  // when the object is not empty, call to
  let urlVisited = pathname;
  if (Object.hasOwn(props, "searchParams")) {
    const params = new URLSearchParams(props.searchParams).toString();
    urlVisited = pathname + "?" + params;
    history.pushState({}, "", urlVisited); // update window history with pushState
    renderView(pathname, props.searchParams);
    document.title = props.title;
  } else {
    history.pushState({}, "", urlVisited); // update window history with pushState
    renderView(pathname);
    document.title = props.title;
  }
};

// ----------------------------------------- 

/**
 * 
 * @param {*} location 
 * Step 2
 */
export const onURLChange = (location) => {
  const searchObject = queryStringToObject(window.location.search);
  if (searchObject) {
    renderView(location, searchObject);
  }
  renderView(location);
};
