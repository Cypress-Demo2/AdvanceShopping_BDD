import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../commonUtil";
const testActions = new TestActions();
import accountCreation from "../../e2e/Pages/AccountCreationPage";
const accountCreationPage = new accountCreation();

Given("I am on homepage", () => {
  testActions.setup();
});
When("I click on login button", () => {
  testActions.clickloginButton();
})    
When("I click on create account", () => {
  accountCreationPage.clickCreateNewAccount();
});
Then("I enter {string} and {string}", (username, password) => {
    accountCreationPage.fillregisterpageusername(username);
    accountCreationPage.fillregisterpagepassword(password);
});
Then("I also enter {string} and {string}", (email, confirmPassword) => {
  testActions.fillemail(email);
  accountCreationPage.fillconfirmpassword(confirmPassword);
});
Then("I click on I agree checkbox", () => {
  accountCreationPage.iagreecheck();
});
Then("I click on register button", () => {
  accountCreationPage.clickRegister();
});
Then("I land on homepage", () => {
  testActions.homepagevalidation();
});



