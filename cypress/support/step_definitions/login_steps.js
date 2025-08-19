import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../../support/commonUtil";
const testActions = new TestActions();

Given("I should be on homepage", () => {
    testActions.setup();
});
Then("I click on login button in header", () => {
    testActions.clickloginButton();
})    
Then("I enter {string} and {string} on login page", (username, password) => {
  testActions.fillUsername(username);
  testActions.fillPassword(password);
});
Then("I click on signin button", () => {
    testActions.signIn();
});
Then("I should land on homepage", (username, password) => {
  testActions.homepagevalidation();
});



