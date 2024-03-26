import { Welcome } from "../src/views/Welcome.js";
import NotFound from "../src/views/Notfound.js";
import IndividualChat from "../src/views/Individual.js";
import { Home } from "../src/views/Home.js";
import { GroupChat } from "../src/views/Group.js";

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
