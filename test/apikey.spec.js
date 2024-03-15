import { getApiKey, setApiKey } from "../src/lib/apikey.js";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    const fakeApikey = getApiKey("thisIsAFakeApikey123@");
    expect(getApiKey()).toBe(fakeApikey);
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    const set = setApiKey("thisIsAFakeApikey123@");
    expect(localStorage.setItem("myStorage","thisIsAFakeApikey123@")).toBe(set);
  });
});
