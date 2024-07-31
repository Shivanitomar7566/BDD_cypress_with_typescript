import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the Magento website', () => {
  cy.visit('https://magento.softwaretestingboard.com');
});

When('I click on the {string} button', (buttonName: string) => {
  if (buttonName === "Create an Account") {
    cy.get('a[href*="/customer/account/create/"]').first().click();
  } else if (buttonName === "Sign In") {
    cy.get('a[href*="/customer/account/login/"]').first().click();
  }
});

When('I fill in the registration form with the following details:', (dataTable: any) => {
  const data = dataTable.rowsHash();
  cy.get('#firstname').type(data.FirstName);
  cy.get('#lastname').type(data.LastName);
  cy.get('#email_address').type(data.Email);
  cy.get('#password').type(data.Password);
  cy.get('#password-confirmation').type(data.ConfirmPassword);
});

When('I submit the registration form', () => {
  cy.get('button[title="Create an Account"]').click();
});

Then('I should see a confirmation message saying {string}', (message: string) => {
  cy.contains(message).should('be.visible');
});
