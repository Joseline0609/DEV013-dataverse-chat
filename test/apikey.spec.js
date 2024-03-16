import { getApiKey, setApiKey, keyName } from "../src/lib/apikey.js";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    localStorage.setItem(keyName,"thisIsAFakeApikey123@");
    expect(getApiKey()).toBe("thisIsAFakeApikey123@");
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    setApiKey("thisIsAFakeApikey123@");
    expect(localStorage.getItem(keyName)).toBe(
      "thisIsAFakeApikey123@"
    );
  });
});
