import { renderItems } from "../src/components/Cards.js";
import { StatsModals } from "../src/components/StatsModals.js";
import { EmptyApiKey } from "../src/components/EmptyApiKey.js"
import { data as fakeData } from "./datatest.js";

describe("renderItems", () => {

  test("The component Cards exists", () => {
    const cardsContainer = renderItems(fakeData);
    expect(cardsContainer).toBeTruthy();
  });

  test("The component EmptyApiKey exists", () => {
    const emptyApiKey = EmptyApiKey("/Group");
    expect(emptyApiKey).toBeTruthy();
  });

  test("The component StatsModals exists", () => {
    const statsModals = StatsModals("ornamental");
    expect(statsModals).toBeTruthy();
  });

});


  