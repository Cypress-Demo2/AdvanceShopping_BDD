Feature: Mice page functionality

  Scenario: Verify product count on mice page
    Given I should be present on Homepge
    When I click on mice button
    Then I validate the count of the mice 
 
  Scenario: Verify price filter functionality of mice 
    Given I should be present on Homepge
    When I click on mice button
    Then I validate the price filter functionality of tablets

  Scenario: Verify scroller type filter functionality
    Given I should be present on Homepge
    When I click on mice button
    Then I validate the scroller type filter functionality for "<Scroller>" type

  Examples:
  | Scroller |
  | Scroll Ball |
  | Scroll Ring |
  | Scroll Wheel |
  | Scroll Whell |
  | Touch Scroll |
  




