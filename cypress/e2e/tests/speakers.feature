Feature: Speaker page functionality

  Scenario: Verify product count on speaker page
    Given I should be present on homepage
    When I click on speaker button
    Then I validate the count of the product display
    
  Scenario: Verify price filter functionality
    Given I should be present on homepage
    When I click on speaker button
    Then I validate the price filter functionality 
    