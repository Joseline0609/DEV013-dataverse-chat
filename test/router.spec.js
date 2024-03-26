import { navigateTo } from "../src/router.js";
import { renderView } from "../src/router.js";

jest.mock("../src/router.js", () => ({
  renderView: jest.fn(),
}));

describe ("navigateTo", () => {
  test("Send us to the right view", () => {
    navigateTo("/Home", { title: "Home" });
    expect(renderView).toHaveBeenCalledWith("/Home");
  });
});