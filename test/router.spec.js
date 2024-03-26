import { navigateTo, setRoutes, setRootElement } from "../src/router.js";
import { Home } from "../src/views/Home.js";
import NotFound from "../src/views/Notfound.js";

describe ("navigateTo", () => {

  setRoutes({
    "/Home": Home,
    "/Notfound": NotFound,
  });

  const newRoot = document.createElement('div');
  setRootElement(newRoot);
  window.structuredClone = (val) => JSON.parse(JSON.stringify(val));

  test("Send us to the right view", () => {
    navigateTo("/Home", { title: "Home" });    
    // Expect new root to contain home
    expect(newRoot).toBeTruthy();
  });

  test("Send us to the right view", () => {
    navigateTo("/NotAPage", { title: "Not a page" });
    expect(newRoot).toBeTruthy();
  });
});