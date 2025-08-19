Feature: User login

  Scenario: Verify user login functionality
    Given I should be on homepage
    Then I click on login button
    Then I enter "<username>" and "<password>" on login page
    Then I click on signin button
    Then I should land on homepage
    

    Examples:
      | username | password   | email                          | confirm_password |
      | Namita   | ABCDe@1234 | testdemoo008@mailinator.com    | ABCDe@1234       |
    