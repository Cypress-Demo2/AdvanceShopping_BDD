import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../../support/commonUtil";
const testActions = new TestActions();

Given("I am on homepage", () => {
  cy.log("✅ Step definition loaded");
  testActions.setup();
});
When("I click on login button", () => {
  cy.log("✅ Step definition loaded"); 
  testActions.clickloginButton();
})    
When("I click on create account", () => {
  cy.log("✅ Step definition loaded");
  testActions.clickCreateNewAccount();
});
Then("I enter {string} and {string}", (username, password) => {
  cy.log("✅ Step definition loaded");
    testActions.fillregisterpageusername(username);
    testActions.fillregisterpagepassword(password);
});
Then("I also enter {string} and {string}", (email, confirmPassword) => {
  cy.log("✅ Step definition loaded");
  testActions.fillemail(email);
  testActions.fillconfirmpassword(confirmPassword);
});
Then("I click on I agree checkbox", () => {
  cy.log("✅ Step definition loaded");
  testActions.iagreecheck();
});
Then("I click on register button", () => {
  cy.log("✅ Step definition loaded");
  testActions.clickRegister();
});
Then("I land on homepage", (username, password) => {
  testActions.homepagevalidation();
});



