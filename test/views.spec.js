import { Welcome } from "../src/views/Welcome.js";
import NotFound from "../src/views/Notfound.js";
import IndividualChat from "../src/views/Individual.js";
import { Home } from "../src/views/Home.js";
import { GroupChat } from "../src/views/Group.js";
import { navigateTo } from "../src/router.js";
import { userNameValue } from "../src/views/Welcome.js"
import { setApiKey } from "../src/lib/apikey.js";

describe("views", () => {
  test("The view Welcome exists", () => {
    const welcome = Welcome();
    expect(welcome).toBeTruthy();
  });

  test("The view Notfound exists", () => {
    const notfound = NotFound();
    expect(notfound).toBeTruthy();
  });

  test("The view Individual exists", () => {
    const individual = IndividualChat({ id: "begonia" });
    expect(individual).toBeTruthy();
  });

  window.structuredClone = (val) => JSON.parse(JSON.stringify(val));
  test("The view Home exists", () => {
    const home = Home();
    expect(home).toBeTruthy();
  });

  test("The view Group exists", () => {
    const group = GroupChat();
    expect(group).toBeTruthy();
  });
});

jest.mock("../src/router.js", () => ({
  navigateTo: jest.fn(),
}));

jest.mock("../src/lib/apikey.js", () => ({
  setApiKey: jest.fn(),
}));

describe("Welcome enterButton", () => {
  const welcome = Welcome();
  const enterButton = welcome.querySelector("#enter-button");

  test('it should be a button', () => {
    expect(enterButton).toBeDefined();
  });
  
  const user = welcome.querySelector("#input-name");
  user.value = "UserName";
  test("Should triger navigateTo Home", () => {
    enterButton.click();
    expect(navigateTo).toHaveBeenCalled();
  });

  test("Should set className to input none", () => {
    user.value = "";
    enterButton.click();
    expect(user.className).toBe("input none");
  });

  test("Should set the userNameValue", () => {
    enterButton.click();
    expect(userNameValue).toBeTruthy();
  });

  const key = welcome.querySelector("#apikey");
  key.value = "";

  it("Should reset the textbox", () => {
    key.value = "notValid";
    enterButton.click();
    expect(setApiKey).toHaveBeenCalledTimes(0);
  });
  
  test("Should set the apiKey Value", () => {
    key.value = "sk-ThisIsAFakeApiKeyForATestrgdbfgvbfgbvrgbcdfgcfbv";
    enterButton.click();
    expect(setApiKey).toHaveBeenCalled();
  });

});