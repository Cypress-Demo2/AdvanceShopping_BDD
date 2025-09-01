
import commonUtils from "../support/commonUtil"
const TestActions = new commonUtils()
class filters {
    items = '//*[@class = "titleItemsCount ng-binding"]'
    pricetab = '//*[@id = "accordionPrice"]'
    upperprice_handler = '//*[@class="noUi-origin noUi-background"]/div'
    minprice = '//*[@class="sliderSteps left ng-binding"]'
    maxprice = '//*[@class="sliderSteps  ng-binding"]'
    productprice = '//*[@class = "productPrice ng-binding"]'
    filter_1 = '//*[@id="accordionAttrib0"]'
    bluetoothenabledbutton = '//*[@name="compatibility_0"]'
    mmaudioconnectorbutton = '//*[@name ="compatibility_1"]'
    filter_2 = '//*[@id="accordionAttrib1"]'
    filter_3 = '//*[@id="accordionAttrib2"]'
    bosebutton = '//*[@name="manufacturer_0"]'
    lgbutton = '//*[@name="manufacturer_2"]'
    hpbutton = '//*[@name="manufacturer_1"]'
    allprices = '//*[@class="productPrice ng-binding"]'
    allproductimages = '.imgProduct'
    fitervalue_1 = '.value.ng-binding'
    fitervalue_4 = 'div.roboto-light.list.ng-scope:nth-child(4) .value.ng-binding'
    filtervalue_6 = 'div.roboto-light.list.ng-scope:nth-child(6) .value.ng-binding'
    filtervalue_3 ='.roboto-light.list.ng-scope:nth-child(3) .value.ng-binding'
    filtervalue_8 ='.roboto-light.list.ng-scope:nth-child(8) .value.ng-binding'
    filtervalue_7 = '.roboto-light.list.ng-scope:nth-child(7) .value.ng-binding'
    filtervalue_2 ='.roboto-light.list.ng-scope:nth-child(2) .value.ng-binding'

    clickProductTabs(element) {
        cy.xpath(element).click({ timeout: 50000 })
        cy.wait(20000);

    }

    productCountValidation() {
        cy.get(this.allproductimages).should('be.visible')
            .then(($items) => {
                const count = $items.length;
                cy.xpath(this.items).then(function (element) {
                    const itemcountvalue = element.text();
                    const itemscount = parseInt(itemcountvalue);
                    expect(count).to.eq(itemscount);
                });
            });
    }
    productpriceFilter() {
        let max = cy.xpath(this.maxprice)
        let min = cy.xpath(this.minprice)
        TestActions.clickpricetab
        TestActions.scrollbutton()
        let maxelement = max.invoke('text')
        let minelement = min.invoke('text')
        minelement.then((minelement) => {
            const cleanminprice = TestActions.cleanprice(minelement)
            maxelement.then((maxelement) => {
                const cleanmaxprice = TestActions.cleanprice(maxelement)
                cy.xpath(this.allprices).each(($element) => {
                    cy.wrap($element).scrollIntoView()
                    cy.wrap($element).invoke('text').then((prices) => {

                        const pricevalue = TestActions.cleanprice(prices)
                        expect(pricevalue).to.be.within(cleanminprice, cleanmaxprice)
                    })
                })
            })
        })
    }
    previousPage() {
        cy.go('back')
    }
    productVisibility() {
        cy.get(this.allproductimages).should('be.visible').then(($items) => {
            const count = $items.length;
            expect(count).to.be.greaterThan(0);
        })
    }
    filterValueValidation(element, value) {
        cy.get(element, { timeout: 20000 })
            .should('be.visible')
            .first()
            .invoke('text')
            .then((text) => {
                expect(text.toLowerCase()).to.include(value.toLowerCase())
            })
    }
    clickFilterElement(element) {
        cy.xpath(element, { timeout: 20000 }).click({ force: true })
        cy.wait(1000)
    }
    clickFilter(element) {
        cy.xpath(element, { timeout: 20000 }).click({ force: true })
    }
    filterValidations(element, filterelement, valueElement, value) {
        this.clickFilter(element)
        this.clickFilterElement(filterelement)
        cy.get(this.allproductimages, { timeout: 30000 }).should('be.visible').each(($el, index) => {
            cy.get(this.allproductimages).eq(index).as('currentProduct')
            cy.get('@currentProduct')
                .scrollIntoView()
                .should('be.visible')
                .click({ force: true }, { timeout: 20000 })
            this.filterValueValidation(valueElement, value)
            this.previousPage()
            cy.get(this.allproductimages, { timeout: 30000 }).should('be.visible')
            this.clickFilter(element)
            this.clickFilterElement(filterelement)
        })
    }

} export default filters;
