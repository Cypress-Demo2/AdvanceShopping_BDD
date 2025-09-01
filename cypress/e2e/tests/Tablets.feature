Feature: Tablets page functionality

  Scenario: Verify product count on tablets page
    Given I should be present on Homepage
    When I click on tablets button
    Then I validate the count of the tablets 
 
  Scenario: Verify price filter functionality of tablets 
    Given I should be present on Homepage
    When I click on tablets button
    Then I validate the price filter functionality of tablets

   
  Scenario: Verify display filter functionality
    Given I should be present on Homepage
    When I click on tablets button
    Then I validate the display filter functionality for "<Display>" diagonal

  Examples:
  | Display |
  | 10.1 |
  | 11.6 |
  | 7.9 |

  Scenario: Verify processor filter functionality
    Given I should be present on Homepage
    When I click on tablets button
    Then I validate the processor filter functionality for "<Processor>" 

  Examples:
  | Processor|
  | Z3795|
  | x5-Z8500|
  | M-5Y71|



