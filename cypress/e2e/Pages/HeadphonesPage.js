import TestActions from "../../support/commonUtil"
import CommonFilters from "../../support/CommonFilters"
const commonfilters = new CommonFilters()
const testActions = new TestActions()

class headphones {
    headphonesstab = '//*[@id="headphonesImg"]'
    compatibilityfiter_1 = '//*[@name ="compatibility_0"]'
    compatibilityfiter_2 = '//*[@name ="compatibility_2"]'
    compatibilityfiter_3 = '//*[@name ="compatibility_3"]'
    connector_1 = '//*[@name ="connector_0"]'
    connector_2 = '//*[@name ="connector_1"]'

    clickHeadphonesTab() {
        commonfilters.clickProductTabs(this.headphonesstab)
    }
    headphonesProductCountValidation() {
        commonfilters.productCountValidation()
    }
    headphonesPriceFilter() {
        commonfilters.productpriceFilter()
    }
    headphonesCompatibilityFilterValidation(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }
    headphonesConnectorFilterValidation(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }

} export default headphones;
