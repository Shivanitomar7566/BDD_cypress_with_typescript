Feature: Account Creation 

  Scenario: User creates a new account and logs in
    Given I visit the Magento website
    When I click on the "Create an Account" button
    And I fill in the registration form with the following details:
      | Field             | Value             |
      | FirstName         | shivani              |
      | LastName          | tomar               |
      | Email             | shivanit@gmail.com |
      | Password          | Test@123#       |
      | ConfirmPassword   | Test@123#       |
    And I submit the registration form
    Then I should see a confirmation message saying "Thank you for registering with Main Website Store."

  
