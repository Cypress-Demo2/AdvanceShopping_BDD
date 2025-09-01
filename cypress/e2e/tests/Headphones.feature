Feature: Headphones page functionality

  Scenario: Verify product count on headphones page
    Given I should be present on HomePge
    When I click on headphones button
    Then I validate the count of the headphones 
 
  Scenario: Verify price filter functionality of headphones 
    Given I should be present on HomePge
    When I click on headphones button
    Then I validate the price filter functionality of headphones

   
  Scenario: Verify compatibility filter functionality of headphones page
    Given I should be present on HomePge
    When I click on headphones button
    Then I validate the compatibility filter functionality for "<compatibility>" filter 

  Examples:
  | compatibility |
  | 3.5 mm audio connector|
  | notebook PCs, netbooks, tablets, mobile phones, and MP3 players |
  | 3.5 mm port|

  Scenario: Verify connector filter functionality
    Given I should be present on HomePge
    When I click on headphones button
    Then I validate the connector filter functionality for "<Connector>" 

  Examples:
  | Connector|
  | BlueTooth|
  | Jack 3.5 mm|
  



