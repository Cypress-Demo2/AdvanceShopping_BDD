import TestActions from "../../support/commonUtil"
import CommonFilters from "../../support/CommonFilters"
const commonfilters = new CommonFilters()
const testActions = new TestActions()

class tablets {
    tabletstab = '//*[@id="tabletsImg"]'
    digonal_10_1 = '//*[@name ="display_0"]'
    digonal_11_6 = '//*[@name ="display_1"]'
    digonal_7_9 = '//*[@name ="display_2"]'
    processor_1 = '//*[@id ="processor_0"]'
    processor_2 = '//*[@id ="processor_1"]'
    processor_3 = '//*[@id ="processor_2"]'

    clickTabletsTab() {
        commonfilters.clickProductTabs(this.tabletstab)
    }
    tabletsProductCountValidation() {
        commonfilters.productCountValidation()
    }
    tabletsPriceFilter() {
        commonfilters.productpriceFilter()
    }
    displayFilterValidation(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }
    processorFilterValidation(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }

} export default tablets;
