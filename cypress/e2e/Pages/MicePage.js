import TestActions from "../../support/commonUtil"
import CommonFilters from "../../support/CommonFilters"
const commonfilters = new CommonFilters()
const testActions = new TestActions()
class mice {
    micetab = '//*[@id="miceImg"]'
    scroller_1 = '//*[@name ="scroller_type_0"]'
    scroller_2 = '//*[@name ="scroller_type_1"]'
    scroller_3 = '//*[@name ="scroller_type_2"]'
    scroller_4 = '//*[@name ="scroller_type_3"]'
    scroller_5 = '//*[@name ="scroller_type_4"]'

    clickmiceTab() {
        commonfilters.clickProductTabs(this.micetab)
    }
    miceProductCountValidation() {
        commonfilters.productCountValidation()
    }
    miceProductPriceFilter() {
        commonfilters.productpriceFilter()
    }
    miceScrollerTypeFilterValidation(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }

} export default mice;
