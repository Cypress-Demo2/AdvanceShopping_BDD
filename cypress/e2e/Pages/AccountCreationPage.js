// <reference types="cypress" />
import 'cypress-xpath';

class accountCreation {
    createNewAccount = '//*[@class="create-new-account ng-scope"]'
    email = '//*[@name="emailRegisterPage"]'
    registerPageUsername = '//*[@name="usernameRegisterPage"]'
    registerPagePassword = '//*[@name="passwordRegisterPage"]'
    password = '//*[@name="passwordRegisterPage"]'
    confirmPassword = '//*[@name="confirm_passwordRegisterPage"]'
    iAgreeCheck = '//*[@name="i_agree"]'
    registerBtn = '//*[@id="register_btn"]'

    clickCreateNewAccount() {
        cy.xpath(this.createNewAccount).click({ timeout: 10000 });
        cy.wait(10000);
    }
    fillregisterpageusername(username) {
        cy.xpath(this.registerPageUsername).type(username, { force: true });
    }
    fillregisterpagepassword(password) {
        cy.xpath(this.registerPagePassword).type(password, { force: true });
    }
    fillconfirmpassword(confirmPassword) {
        cy.xpath(this.confirmPassword).type(confirmPassword, { force: true });
    }
    clickRegister() {
        cy.xpath(this.registerBtn).click();
    }
    iagreecheck() {
        cy.xpath(this.iAgreeCheck).check();
    }
} export default accountCreation;

