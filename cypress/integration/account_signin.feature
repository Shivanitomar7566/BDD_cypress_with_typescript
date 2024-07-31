Feature: User Login

Scenario: User logs in with the newly created account
    Given I visit the Magento website
    When I click on the "Sign In" button
    And I fill in the login form with the following details:
      | Email    | shivanitom@gmail.com    |
      | Password  | Test@123# |
    And I submit the login form
    Then I should see the user dashboard with a greeting message