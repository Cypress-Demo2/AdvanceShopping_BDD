import TestActions from "../../support/commonUtil"
import CommonFilters from "../../support/CommonFilters"
const commonfilters = new CommonFilters()
const testActions = new TestActions()
class laptops {
    laptopsstab = '//*[@id="laptopsImg"]'
    display_1 = '//*[@name ="display_0"]'
    display_2 = '//*[@name ="display_1"]'
    display_3 = '//*[@name ="display_2"]'
    display_4 = '//*[@name ="display_3"]'
    display_5 = '//*[@name ="display_4"]'
    display_6 = '//*[@name ="display_5"]'
    display_7 = '//*[@name ="display_6"]'
    display_8 = '//*[@name ="display_7"]'
    display_9 = '//*[@name ="display_8"]'
    display_10 = '//*[@name ="display_9"]'
    display_11 = '//*[@name ="display_10"]'
    processor_1 = '//*[@id= "processor_0"]'
    processor_2 = '//*[@id= "processor_1"]'
    processor_3 = '//*[@id= "processor_2"]'
    processor_4 = '//*[@id= "processor_3"]'
    processor_5 = '//*[@id= "processor_4"]'
    processor_6 = '//*[@id= "processor_5"]'
    processor_7 = '//*[@id= "processor_6"]'
    processor_8 = '//*[@id= "processor_7"]'
    processor_9 = '//*[@id= "processor_8"]'
    processor_10 = '//*[@id= "processor_9"]'
    OS_1 = '//*[@name="operating_system_0"]'
    OS_2 = '//*[@name="operating_system_1"]'
    OS_3 = '//*[@name="operating_system_2"]'
    OS_4 = '//*[@name="operating_system_3"]'

    clickLaptopsTab() {
        commonfilters.clickProductTabs(this.laptopsstab)
    }
    laptopsProductCountValidation() {
        commonfilters.productCountValidation()
    }
    laptopsProductPriceFilter() {
        commonfilters.productpriceFilter()
    }
    laptopsDisplayFilterValidation(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }
    laptopsProcessorFilterValidation(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }
    laptopOperatingSystemFilterValidation
        (element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }

} export default laptops;
