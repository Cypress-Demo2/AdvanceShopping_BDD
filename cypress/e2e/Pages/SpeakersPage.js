
class speaker {
    speakertab = '//*[@id="speakersImg"]'
    allproducts = '//html/body/div[3]/section/article/div[3]/div/div/div[2]/ul'
    items = '//*[@class = "titleItemsCount ng-binding"]'
    pricetab = '//*[@id = "accordionPrice"]'
    upperprice_handler = '//*[@class="noUi-origin noUi-background"]/div'
    minprice = '//*[@class="sliderSteps left ng-binding"]'
    maxprice = '//*[@class="sliderSteps  ng-binding"]'
    productprice = '//*[@class = "productPrice ng-binding"]'
    compatibilityfilterbutton = '//*[@id="accordionAttrib0"]'
    bluetoothenabledbutton = '//*[@name="compatibility_0"]'
    mmaudioconnectorbutton = '//*[@name ="compatibility_1"]'
    manifauturefilterbutton = '//*[@id="accordionAttrib1"]'
    bosebutton = '//*[@name="manufacturer_0"]'
    lgbutton = '//*[@name="manufacturer_2"]'
    HPbutton = '//*[@name="manufacturer_1"]'
    Allmanifauturebutton = '//*[@id="mobileSlide"]/ul/li[3]/div'
    Allprices = '//*[@class="productPrice ng-binding"]'
    Allproductimages = '.imgProduct'
    compatibility = '.value.ng-binding'
    manifacturervalue = 'div.roboto-light.list.ng-scope:nth-child(4) .value.ng-binding'
   

    speakerCountValidation() {
        cy.get(this.Allproductimages).should('be.visible')
            .then(($items) => {
                const count = $items.length;
                cy.get(this.items).then(function (element) {
                    const itemcountvalue = element.text();
                    const itemscount = parseInt(itemcountvalue);
                    expect(count).to.eq(itemscount);
                });
            });
    }
    priceFilter() {
        let max = cy.xpath(this.maxprice)
        let min = cy.xpath(this.minprice)
        this.clickpricetab()
        this.scrollbutton()
        let maxelement = max.invoke('text')
        let minelement = min.invoke('text')
        minelement.then((minelement) => {
            const cleanminprice = this.cleanprice(minelement)
            maxelement.then((maxelement) => {
                const cleanmaxprice = this.cleanprice(maxelement)
                cy.get(this.Allprices).each(($element) => {
                    cy.wrap($element).scrollIntoView()
                    cy.wrap($element).invoke('text').then((prices) => {

                        const pricevalue = this.cleanprice(prices)
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
        cy.get(this.Allproductimages).should('be.visible').then(($items) => {
            const count = $items.length;
            expect(count).to.be.greaterThan(0);
        })
    }
    filterValueValidation(element,value) {
        cy.get(element, { timeout: 20000 })
            .should('be.visible')
            .first()
            .invoke('text')
            .then((text) => {
                expect(text.toLowerCase()).to.include(value.toLowerCase())
            })
    }
    /*compatibilityfiltervaluevalidation(value) {
        cy.get(this.compatibility, { timeout: 20000 })
            .should('be.visible')
            .first()
            .invoke('text')
            .then((text) => {
                expect(text.toLowerCase()).to.include(value.toLowerCase())
            })
    }
    manifaturefiltervaluevalidation(value) {
        cy.get(this.manifacturervalue, { timeout: 20000 })
            .should('be.visible')
            .first()
            .invoke('text')
            .then((text) => {
                expect(text.toLowerCase()).to.include(value.toLowerCase())
            })
    }*/
    clickFilterElement(element) {
        cy.xpath(element, { timeout: 20000 }).click({ force: true })
        cy.wait(1000)
    }
    clickFilter(element){
       cy.xpath(element, { timeout: 20000 }).click({ force: true })
    }
    productIteration(){
        cy.get(this.Allproductimages, { timeout: 30000 }).should('be.visible').each(($el, index) => {
            cy.get(this.Allproductimages).eq(index).as('currentProduct')
            cy.get('@currentProduct')
                .scrollIntoView()
                .should('be.visible')
                 .click({ force: true }, { timeout: 20000 })
    })
}
    filterValidations(element, filterelement,valueElement,value) {
        this.clickFilter(element)
        this.clickFilterElement(filterelement)
        cy.get(this.Allproductimages, { timeout: 30000 }).should('be.visible').each(($el, index) => {
            cy.get(this.Allproductimages).eq(index).as('currentProduct')
            cy.get('@currentProduct')
                .scrollIntoView()
                .should('be.visible')
                 .click({ force: true }, { timeout: 20000 })
             this.filterValueValidation(valueElement,value)
            this.previousPage()
            cy.get(this.Allproductimages, { timeout: 30000 }).should('be.visible')
            this.clickFilter(element)
            this.clickFilterElement(filterelement)
        })
    }

} export default speaker;
