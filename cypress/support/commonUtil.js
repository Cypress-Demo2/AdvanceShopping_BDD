// <reference types="cypress" />
import 'cypress-xpath';

class TestActions {
  loginbutton = '//*[@id="menuUserSVGPath"]'
  username = '//*[@name = "username"]'
  Password = '//*[@name="password"]'
  signInbutton = '//*[@id="sign_in_btn"]'
  loginbutton = '//*[@id="menuUserSVGPath"]'
  createNewAccount = '//*[@class="create-new-account ng-scope"]'
  email = '//*[@name="emailRegisterPage"]'
  registerpageusername = '//*[@name="usernameRegisterPage"]'
  registerpagepassword = '//*[@name="passwordRegisterPage"]'
  password = '//*[@name="passwordRegisterPage"]'
  confirmpassword = '//*[@name="confirm_passwordRegisterPage"]'
  name = '//*[@name="usernameRegisterPage"]'
  iAgreecheck = '//*[@name="i_agree"]'
  register = '//*[@id="register_btn"]'
  signout = `//*[@class="option roboto-medium ng-scope"]`
  loginbutton = '//*[@id="menuUserSVGPath"]'
  username = '//*[@name = "username"]'
  password = '//*[@name="password"]'
  signInbutton = '//*[@id="sign_in_btn"]'
  speakertab = '//*[@id="speakersImg"]'
  items = '//*[@class = "titleItemsCount ng-binding"]'
  pricetab = '//*[@id = "accordionPrice"]'
  upperprice_handler = '//*[@class="noUi-origin noUi-background"]/div'
  minprice = '//*[@class="sliderSteps left ng-binding"]'
  maxprice = '//*[@class="sliderSteps  ng-binding"]'
  productprice = '//*[@class = "productPrice ng-binding"]'
  Allproductimages = '//*[@class="imgProduct"]'

  setup() {
    cy.visit('https://advantageonlineshopping.com')
    cy.wait(10000)
  }
  priviousPage() {
    cy.go('back')
  }
  productvisibility() {

    cy.get(this.Allproductimages).should('be.visible').then(($items) => {
      const count = $items.length;
      expect(count).to.be.greaterThan(0);
    })
  }
  fillemail(Email) {
    cy.xpath(this.email).type(Email);
  }
  fillUsername(username) {
    cy.xpath(this.username).should('be.visible').type(username, { force: true });
  }
  fillregisterpageusername(username) {
    cy.xpath(this.registerpageusername).type(username, { force: true });
  }
  fillregisterpagepassword(password) {
    cy.xpath(this.registerpagepassword).type(password, { force: true });
  }
  fillPassword(password) {
    cy.xpath(this.password).type(password, { force: true });
  }
  fillloginpagepassword(password) {
    cy.xpath(this.Password).type(password, { force: true });
  }
  fillconfirmpassword(confirmPassword) {
    cy.xpath(this.confirmpassword).type(confirmPassword, { force: true });
  }
  signIn() {
    cy.xpath(this.signInbutton).click({ timeout: 10000 });
    cy.wait(10000)
  }
  clickloginButton() {
    cy.xpath(this.loginbutton).click({ timeout: 10000 });
    //this.scrollintoView({element: this.createNewAccount});
    //this.elementvisibility(this.createNewAccount);
  }
  elementvisibility(element) {
    cy.xpath(element).should('be.visible');
  }
  clickCreateNewAccount() {
    cy.xpath(this.createNewAccount).click({ timeout: 10000 });
    cy.wait(10000);
    this.registrationonpagevalidation();
  }
  clickRegister() {
    cy.xpath(this.register).click();
  }
  iagreecheck() {
    cy.xpath(this.iAgreecheck).check();
  }
  login(username, password) {
    this.setup();
    this.clickloginButton();
    this.fillUsername(username);
    this.fillloginpagepassword(password);
    this.signIn();
  }
  Signout() {
    cy.xpath(this.loginbutton).click();
    cy.xpath(this.signout).contains('Sign out').click({ force: true });
  }
  cleanprice(text) {
    return parseFloat(text.replace(/[^\d.]/g, '').trim());
  }
  clickspeakertab() {
    cy.xpath(this.speakertab).click({ timeout: 10000 });
    cy.wait(10000);
  }
  clickproducttabs(element) {
    cy.xpath(element).click({ timeout: 10000 });
    cy.wait(10000);
  }
  itemsvisibility() {
    cy.xpath(this.items).should('be.visible');
  }
  scrollbutton() {
    cy.xpath(this.upperprice_handler).scrollTo(0, 1000, { ensureScrollable: false });
  }
  homepagevalidation() {
    cy.url().should('include', 'https://advantageonlineshopping.com/#/');
  }
  registrationonpagevalidation() {
    cy.url().should('include', 'https://advantageonlineshopping.com/#/register');
  }
  speakercountvalidation() {
    cy.get('img.imgProduct')
      .then(($items) => {
        const count = $items.length;
        cy.get('.titleItemsCount.ng-binding').should('be.visible');
        cy.get('.titleItemsCount.ng-binding').then(function (element) {
          const itemcountvalue = element.text();
          const itemscount = parseInt(itemcountvalue);
          expect(count).to.eq(itemscount);
        });
      });
  }
  itemsvisibility() {
    cy.xpath(this.items).should('be.visible');
  }
  maxprice() {
    let max = cy.xpath(this.maxprice).should('be.visible');
    let maxelement = max.invoke('text')
    return this.cleanprice(maxelement)
  }
  minprice() {
    let min = cy.xpath(this.minprice).should('be.visible')
    let minelement = min.invoke('text')
    return this.cleanprice(minelement)
  }
  scrollintoView({ element }) {
    cy.get(element).scrollIntoView({ ensureScrollable: false });
  }

  clickpricetab() {
    cy.xpath(this.pricetab).click();
  }
  pricefilter() {
    let max = cy.xpath(this.maxprice)
    let min = cy.xpath(this.minprice)
    this.clickpricetab()
    this.scrollbutton({})
    let maxelement = max.invoke('text')
    let minelement = min.invoke('text')
    minelement.then((minelement) => {
      const cleanminprice = this.cleanprice(minelement)
      maxelement.then((maxelement) => {
        const cleanmaxprice = this.cleanprice(maxelement)
        cy.get('.productPrice.ng-binding').should('be.visible')
        let mainvalue = cy.get('.productPrice.ng-binding').each(($element) => {
          cy.wrap($element).scrollIntoView()
          cy.wrap($element).invoke('text').then((prices) => {

            const pricevalue = this.cleanprice(prices)
            expect(pricevalue).to.be.within(cleanminprice, cleanmaxprice)
          })
        })
      })
    })
  }

} export default TestActions;

