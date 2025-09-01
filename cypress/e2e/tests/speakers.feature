Feature: Speaker page functionality

  Scenario: Verify product count on speaker page
    Given I should be present on homepage
    When I click on speaker button
    Then I validate the count of the product display
    
  Scenario: Verify price filter functionality
    Given I should be present on homepage
    When I click on speaker button
    Then I validate the price filter functionality 

 
  Scenario: Verify compatibility filter functionality
    Given I should be present on homepage
    When I click on speaker button
    Then I validate the compatibility filter functionality for "<filter>"

    Examples:
      | filter              |
      | bluetooth enabled   |

 Scenario: Verify manufacturer filter functionality
    Given I should be present on homepage
    When I click on speaker button
    Then I validate the manufacturer filter functionality for "<Manufacturer>"

  Examples:
    | Manufacturer |
    | Bose         |
    | HP           |
    | Logitech     |

    