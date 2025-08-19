import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../../support/commonUtil";

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
