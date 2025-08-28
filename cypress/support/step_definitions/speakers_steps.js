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
    speakersPage.filterValidations(speakersPage.compatibilityfilterbutton,speakersPage.bluetoothenabledbutton,speakersPage.compatibility,filter);
  } 
})
Then("I validate the manufacturer filter functionality for {string}", (Manufacturer) => {
  if (Manufacturer==='Bose') {
    speakersPage.filterValidations(speakersPage.manifauturefilterbutton,speakersPage.bosebutton,speakersPage.manifacturervalue, Manufacturer);
  } else if (Manufacturer==='HP') {
   speakersPage.filterValidations(speakersPage.manifauturefilterbutton,speakersPage.HPbutton,speakersPage.manifacturervalue, Manufacturer);
  } else if(Manufacturer==='Logitech') {
    speakersPage.filterValidations(speakersPage.manifauturefilterbutton,speakersPage.lgbutton,speakersPage.manifacturervalue,Manufacturer);
  }
  
});

