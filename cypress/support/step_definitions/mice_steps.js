import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../commonUtil";
import MicePage from "../../e2e/Pages/MicePage"
import commonFilters from "../../support/CommonFilters"
const commonfilters = new commonFilters()
const micepage = new MicePage();
const testActions = new TestActions();

Given("I should be present on Homepge", () => {
  testActions.setup();
});

When("I click on mice button", () => {
 micepage.clickmiceTab()
});

Then("I validate the count of the mice", () => {
  micepage.miceProductCountValidation()
});

Then("I validate the price filter functionality of mice", () => {
  micepage.miceProductPriceFilter()
});

Then("I validate the scroller type filter functionality for {string} type", (Scroller) => {
  if (Scroller === "Scroll Ball") {
     micepage.miceScrollerTypeFilterValidation(
      commonfilters.filter_1,
      micepage.scroller_1,
      commonfilters.fitervalue_4,Scroller
    );
  } else if (Scroller === "Scroll Ring ") {
     micepage.miceScrollerTypeFilterValidation(
      commonfilters.filter_1,
      micepage.scroller_2,
      commonfilters.fitervalue_4,Scroller
    );
  } else if (Scroller === "Scroll Wheel ") {
     micepage.miceScrollerTypeFilterValidation(
      commonfilters.filter_1,
      micepage.scroller_3,
      commonfilters.fitervalue_4,Scroller
    );
  }else if (Scroller === "Scroll Whell ") {
     micepage.miceScrollerTypeFilterValidation(
      commonfilters.filter_1,
      micepage.scroller_4,
      commonfilters.fitervalue_4,Scroller
    );
    }else if (Scroller === "Touch Scroll ") {
     micepage.miceScrollerTypeFilterValidation(
      commonfilters.filter_1,
      micepage.scroller_5,
      commonfilters.fitervalue_4,Scroller
    );
  }
});








