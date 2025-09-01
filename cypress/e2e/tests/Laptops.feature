Feature: Laptops page functionality

  Scenario: Verify product count on laptops page
    Given I should be present on HomePage
    When I click on laptops button
    Then I validate the count of the laptops
 
  Scenario: Verify price filter functionality of laptops 
    Given I should be present on HomePage
    When I click on laptops button
    Then I validate the price filter functionality of laptops

   
  Scenario: Verify display filter functionality of laptops page
    Given I should be present on HomePage
    When I click on laptops button
    Then I validate the display filter functionality for laptop's "<Display>"

  Examples:
  | Display |
  | 11.6-diagonal HD anti-glare |
  | 11.6-inch diagonal HD WLED|
  | 13.3 inch diagonal QHD |
  | 14-diagonal HD WLED |
  | 14-inch diagonal LED |
  | 15.6-inch diagonal Full HD WLED |
  | 15.6-inch diagonal Full HD WLED-backlit IPS|
  | 15.6-inch diagonal HD BrightView |
  | 15.6-inch diagonal HD WLED-backlit |
  | 17.3 inch diagonal LED-backlit |
  | 17.3-inch diagonal Full HD WLED |

  @focus
  Scenario: Verify operating system filter functionality of laptops page
  Given I should be present on Homepage
  When I click on laptops button
  Then I validate the operating system filter functionality for "<OS>" of laptops page

  Examples:
  | OS|
  | Chrome OS|
  | Windows 10|
  | Windows 7 Professional 64|
  | Windows 8.1|
  