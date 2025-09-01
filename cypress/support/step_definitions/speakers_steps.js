import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../commonUtil";
import SpeakersPage from "../../e2e/Pages/SpeakersPage";
import CommonFilters from "../../support/CommonFilters"
const speakersPage = new SpeakersPage();
const testActions = new TestActions();
const commonfilters = new CommonFilters()
Given("I should be present on homepage", () => {
  testActions.setup();
});

When("I click on speaker button", () => {
  speakersPage.clickSpeakerTab()
});

Then("I validate the count of the laptops", () => {
  speakersPage.speakerCountValidation()
});

Then("I validate the price filter functionality", () => {
 speakersPage.speakerpriceFilter()
});
Then("I validate the compatibility filter functionality for {string}", (filter) => {
  if (filter.toLowerCase().includes("bluetooth")) {
    speakersPage.comaptibilityFilterValidations(commonfilters.filter_1,speakersPage.bluetoothenabledbutton,commonfilters.fitervalue_1,filter);
  } 
})
Then("I validate the manufacturer filter functionality for {string}", (Manufacturer) => {
  if (Manufacturer==='Bose') {
    speakersPage.manifuctureFilterValidations(commonfilters.filter_2,speakersPage.bosebutton,commonfilters.fitervalue_4, Manufacturer);
  } else if (Manufacturer==='HP') {
   speakersPage.manifuctureFilterValidations(commonfilters.filter_2,speakersPage.hpbutton,commonfilters.fitervalue_4, Manufacturer);
  } else if(Manufacturer==='Logitech') {
    speakersPage.manifuctureFilterValidations(commonfilters.filter_2,speakersPage.lgbutton,commonfilters.fitervalue_4, Manufacturer);
  }  
});


