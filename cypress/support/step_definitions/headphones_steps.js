import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../commonUtil";
import HeadphonePage from "../../e2e/Pages/HeadphonesPage"
import commonFilters from "../../support/CommonFilters"
const commonfilters = new commonFilters()
const heaphonespage = new HeadphonePage()
const testActions = new TestActions();

Given("I should be present on HomePge", () => {
  testActions.setup();
});

When("I click on headphones button", () => {
 heaphonespage.clickHeadphonesTab()
});

Then("I validate the count of the headphones", () => {
  heaphonespage.headphonesProductCountValidation()
});

Then("I validate the price filter functionality of headphones", () => {
  heaphonespage.headphonesPriceFilter()
});

Then("I validate the compatibility filter functionality for {string} filter", (Compatibility) => {
  if (Compatibility === "3.5 mm audio connector") {
    heaphonespage.headphonesCompatibilityFilterValidation(
      commonfilters.filter_1,
      heaphonespage.compatibilityfiter_1,
      commonfilters.filtervalue_2,Compatibility
    );
  } else if (Compatibility === "notebook PCs, netbooks, tablets, mobile phones, and MP3 players") {
    heaphonespage.headphonesCompatibilityFilterValidation(
      commonfilters.filter_1,
      heaphonespage.compatibilityfiter_2,
      commonfilters.filtervalue_2,Compatibility
    );
  } else if (Compatibility === "3.5 mm port") {
    heaphonespage.headphonesCompatibilityFilterValidation(
      commonfilters.filter_1,
      heaphonespage.compatibilityfiter_3,
      commonfilters.filtervalue_2,Compatibility
    );
  }
});
Then("I validate the connector filter functionality for {string}", (Connector) => {
  if (Connector === "BlueTooth") {
    heaphonespage.headphonesConnectorFilterValidation(
      commonfilters.filter_2,
      heaphonespage.connector_1,
      commonfilters.filtervalue_3,Connector
    );
  } else if (Connector === "Jack 3.5 mm") {
    heaphonespage.headphonesConnectorFilterValidation(
      commonfilters.filter_2,
      heaphonespage.connector_1,
      commonfilters.filtervalue_3,Connector
    );
  }
});







