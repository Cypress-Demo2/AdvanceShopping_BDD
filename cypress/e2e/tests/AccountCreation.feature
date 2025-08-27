Feature: User Registration

  Scenario: Register new user
    Given I am on homepage
    When I click on login button
    When I click on create account
    Then I enter "<username>" and "<password>"
    Then I also enter "<email>" and "<confirm_password>"
    Then I click on I agree checkbox
    Then I click on register button
    Then I land on homepage
    

    Examples:
      | username | password   | email                          | confirm_password |
      | Namita   | ABCDe@1234 | testdemoo008@mailinator.com    | ABCDe@1234       |
    