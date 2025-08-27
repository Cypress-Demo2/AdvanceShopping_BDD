
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
    lgbutton = '//*[@name="manufacturer_1"]'
    HPbutton = '//*[@name="manufacturer_2"]'
    Allmanifauturebutton = '//*[@id="mobileSlide"]/ul/li[3]/div'
    Allprices = '//*[@class="productPrice ng-binding"]'
    Allproductimages = '.imgProduct'
    compatibility = '.value.ng-binding'
    manifacturervalue = ':nth-child(4) > .value'

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
    productvisibility() {
        cy.get(this.Allproductimages).should('be.visible').then(($items) => {
            const count = $items.length;
            expect(count).to.be.greaterThan(0);
        })
    }
    compatibilityfiltervaluevalidation(value) {
        cy.get(this.compatibility, { timeout: 20000 })
            .should('be.visible')
            .first()
            .invoke('text')
            .then((text) => {
                expect(text.toLowerCase()).to.include(value.toLowerCase())
            })
    }
    clickfilterelement(element) {
        cy.xpath(element, { timeout: 20000 }).click({ force: true })
    }
   compatibilityFilter(element, value) {
  cy.xpath(this.compatibilityfilterbutton, { timeout: 20000 }).click({ force: true })
  this.clickfilterelement(element)

  cy.get(this.Allproductimages, { timeout: 30000 }).should('be.visible').each(($el, index) => {
    // alias current product to avoid detached DOM issue
    cy.get(this.Allproductimages).eq(index).as('currentProduct')

    cy.get('@currentProduct')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true }, { timeout: 20000 })

    // validate product details
    this.compatibilityfiltervaluevalidation(value)

    // go back (or close modal)
    this.previousPage()

    // wait for product grid to re-render
    cy.get(this.Allproductimages, { timeout: 30000 }).should('be.visible')
  })
    }
    compatibilityFilterBluetoothEnabled(value) {
        this.compatibilityFilter(this.bluetoothenabledbutton,value);
    }
    compatibilityfilter_mmAudioConnector(value) {
        this.compatibilityFilter(this.mmaudioconnectorbutton,value);
    }
    manifauturefilter(value) {
        cy.xpath(this.manifauturefilterbutton).click({ force: true }, { timeout: 20000 })
        //cy.xpath(this.Allmanifauturebutton).should('be.visible').then((element) => {
        //const allmainfaturerecount = element.length
        //for (let i = 0; i < allmainfaturerecount; i++) {
        //cy.xpath(this.Allmanifauturebutton).eq(i).scrollIntoView().click({ force: true })
        // cy.wait(1000)
        cy.get(this.Allproductimages).should('be.visible').then(($products) => {
            const productCount = $products.length
            for (let i = 0; i < productCount; i++) {
                cy.get(this.Allproductimages).eq(i).scrollIntoView().click({ force: true }, { timeout: 20000 })
                cy.get(this.manifacturervalue)
                    .should('be.visible')
                    .invoke('text')
                    .then((text) => {
                        expect(text.toLowerCase()).to.include(value.toLowerCase())
                    })

                this.previousPage()
                this.productvisibility()
            }
        })
    }
    maifactureFilter_Bose() {
        this.manifauturefilter('Bose');
    }
    maifactureFilter_LG() {
        this.manifauturefilter('LG');
    }
    maifactureFilter_HP() {
        this.manifauturefilter('HP');
    }

} export default speaker;
