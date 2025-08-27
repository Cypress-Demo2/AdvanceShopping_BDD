import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../commonUtil";
import SpeakersPage from "../../e2e/Pages/SpeakersPage";
const speakersPage = new SpeakersPage();

const testActions = new TestActions();

Given("I should be present on homepage", () => {
  testActions.setup();
});

When("I click on speaker button", () => {
  testActions.clickspeakertab();
});

Then("I validate the count of the product display", () => {
  testActions.speakercountvalidation();
});

Then("I validate the price filter functionality", () => {
  testActions.pricefilter();
});
Then("I validate the compatibility filter functionality for {string}", (filter) => {
  if (filter.toLowerCase().includes("bluetooth")) {
    speakersPage.compatibilityFilter(speakersPage.bluetoothenabledbutton, filter);
  } else if (filter.toLowerCase().includes("mm audio connector")) {
    speakersPage.compatibilityFilter(speakersPage.mmaudioconnectorbutton, filter);
  }
})
Then("I validate the manufacturer filter functionality for {string}", (manifacturer) => {
  speakersPage.manifauturefilter(manifacturer);
});

