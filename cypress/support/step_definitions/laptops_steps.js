import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestActions from "../commonUtil";
import LaptopsPage from "../../e2e/Pages/LaptopsPage"
import commonFilters from "../../support/CommonFilters"
const commonfilters = new commonFilters()
const laptopsPage = new LaptopsPage();
const testActions = new TestActions();

Given("I should be present on HomePage", () => {
  testActions.setup();
});

When("I click on laptops button", () => {
 laptopsPage.clickLaptopsTab()
});

Then("I validate the count of the laptops", () => {
  laptopsPage.laptopsProductCountValidation()
});

Then("I validate the price filter functionality of laptops", () => {
  laptopsPage.laptopsProductPriceFilter()
});

Then("I validate the display filter functionality for laptop's {string}", (Display) => {
  if (Display === "11.6-diagonal HD anti-glare") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_1,
      commonfilters.filtervalue_3,Display
    );
  } else if (Display === "11.6-inch diagonal HD WLED") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_2,
      commonfilters.filtervalue_3,Display
    );
  } else if (Display === "13.3 inch diagonal QHD") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_3,
      commonfilters.filtervalue_3,Display
    );
    } else if (Display === "14-diagonal HD WLED") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_4,
      commonfilters.filtervalue_3,Display
    );
    } else if (Display === "14-inch diagonal LED") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_5,
      commonfilters.filtervalue_3,Display
    );
    } else if (Display === "15.6-inch diagonal Full HD WLED") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_6,
      commonfilters.filtervalue_3,Display
    );
   }else if (Display === "15.6-inch diagonal Full HD WLED-backlit IPS") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_7,
      commonfilters.filtervalue_3,Display
    );
    }else if (Display === "15.6-inch diagonal HD BrightView") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_8,
      commonfilters.filtervalue_3,Display
    );
    }else if (Display === "15.6-inch diagonal HD WLED-backlit") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_9,
      commonfilters.filtervalue_3,Display
    );
    }else if (Display === "17.3 inch diagonal LED-backlit") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_10,
      commonfilters.filtervalue_3,Display
    );
    }else if (Display === "17.3-inch diagonal Full HD WLED") {
    laptopsPage.laptopsDisplayFilterValidation(
      commonfilters.filter_1,
      laptopsPage.display_11,
      commonfilters.filtervalue_3,Display
    );
  }
});
Then("I validate the processor filter functionality for {string} of laptops page", (Processor) => {
  if (Processor === "A10-8700P") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_1,
      commonfilters.filtervalue_8,Processor
    );
  } else if (Processor === "Intel Turbo Boost Technology") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_2,
      commonfilters.filtervalue_8,Processor
    );
  } else if (Processor === "N3050") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_3,
      commonfilters.filtervalue_8,Processor
    );
    } else if (Processor === "i5-6200U") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_4,
      commonfilters.filtervalue_8,Processor
    );
    } else if (Processor === "i5-6200U Dual CoreProcessor") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_5,
      commonfilters.filtervalue_8,Processor
    );
    } else if (Processor === "i5-6200U") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_6,
      commonfilters.filtervalue_8,Processor
    );
    } else if (Processor === "Intel® Celeron® processor") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_7,
      commonfilters.filtervalue_8,Processor
    );
    } else if (Processor === "i7-4710MQ") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_8,
      commonfilters.filtervalue_8,Processor
    );
    } else if (Processor === "i7-5500U") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_9,
      commonfilters.filtervalue_8,Processor
    );
    } else if (Processor === "i5-6300HQ") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_3,
      laptopsPage.processor_10,
      commonfilters.filtervalue_8,Processor
    );

  }
})
  Then("I validate the operating system filter functionality for {string} of laptops page", (OS) => {
  if (OS === "Chrome OS") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_2,
      laptopsPage.OS_1,
      commonfilters.filtervalue_7,OS
    );
  } else if (OS === "Windows 10") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_2,
      laptopsPage.OS_2,
      commonfilters.filtervalue_7,OS
    );
  } else if (OS === "Windows 7 Professional 64") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_2,
      laptopsPage.OS_3,
      commonfilters.filtervalue_7,OS
    );
    } else if (OS === "Windows 8.1") {
    laptopsPage.laptopsProcessorFilterValidation(
      commonfilters.filter_2,
      laptopsPage.OS_4,
      commonfilters.filtervalue_7,OS
    );
    }
});







