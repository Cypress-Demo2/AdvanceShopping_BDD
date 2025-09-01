import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../commonUtil";
import Tabletspage from "../../e2e/Pages/TabletsPage"
import commonFilters from "../../support/CommonFilters"
const commonfilters = new commonFilters()
const tabletsPage = new Tabletspage();
const testActions = new TestActions();

Given("I should be present on Homepage", () => {
  testActions.setup();
});

When("I click on tablets button", () => {
 tabletsPage.clickTabletsTab()
});

Then("I validate the count of the tablets", () => {
  tabletsPage.tabletsProductCountValidation()
});

Then("I validate the price filter functionality of tablets", () => {
  tabletsPage.tabletsPriceFilter()
});

Then("I validate the display filter functionality for {string} diagonal", (Display) => {
  if (Display === "10.1") {
    tabletsPage.displayFilterValidation(
      commonfilters.filter_1,
      tabletsPage.digonal_10_1,
      commonfilters.fitervalue_1,Display
    );
  } else if (Display === "11.6") {
    tabletsPage.displayFilterValidation(
      commonfilters.filter_1,
      tabletsPage.digonal_11_6,
      commonfilters.fitervalue_1,Display
    );
  } else if (Display === "7.9") {
    tabletsPage.displayFilterValidation(
      commonfilters.filter_1,
      tabletsPage.digonal_7_9,
      commonfilters.fitervalue_1,Display
    );
  }
});
Then("I validate the processor filter functionality for {string}", (Processor) => {
  if (Processor === "Z3795") {
    tabletsPage.processorFilterValidation(
      commonfilters.filter_2,
      tabletsPage.processor_1,
      commonfilters.filtervalue_6,Processor
    );
  } else if (Processor === "x5-Z8500") {
    tabletsPage.processorFilterValidation(
      commonfilters.filter_2,
      tabletsPage.processor_2,
      commonfilters.filtervalue_6,Processor
    );
  } else if (Processor === "M-5Y71") {
    tabletsPage.processorFilterValidation(
      commonfilters.filter_2,
      tabletsPage.processor_3,
      commonfilters.filtervalue_6,Processor
    );
  }
});







