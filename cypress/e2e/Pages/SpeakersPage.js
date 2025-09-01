
import CommonFilters from "../../support/CommonFilters"
const commonfilters = new CommonFilters()

class speaker {
    speakertab = '//*[@id="speakersImg"]'
    bluetoothenabledbutton = '//*[@name="compatibility_0"]'
    mmaudioconnectorbutton = '//*[@name ="compatibility_1"]'
    manifauturefilterbutton = '//*[@id="accordionAttrib1"]'
    bosebutton = '//*[@name="manufacturer_0"]'
    lgbutton = '//*[@name="manufacturer_2"]'
    hpbutton = '//*[@name="manufacturer_1"]'

    clickSpeakerTab(element) {
        commonfilters.clickProductTabs(this.speakertab)
    }
    speakerCountValidation() {
        commonfilters.productCountValidation()
    }
    speakerpriceFilter() {
        commonfilters.productpriceFilter()

    }
    comaptibilityFilterValidations(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }
    manifuctureFilterValidations(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }
    speakerWeightFiltervalidation(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }
    speakerWirelesstechnologyFilterValidation(element, filterelement, valueElement, value) {
        commonfilters.filterValidations(element, filterelement, valueElement, value)
    }
} export default speaker;
