import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When('I fill in the login form with the following details:', (dataTable: any) => {
    const data = dataTable.rowsHash();
    cy.get('#email').type(data.Email);
    cy.get('#pass').type(data.Password);
  });
  
  When('I submit the login form', () => {
    cy.get("div>button[class='action login primary']>span").click();
  });
  
  Then('I should see the user dashboard with a greeting message', () => {
    cy.get("div[class='field search']>div[class='control']>input[id='search']").should('be.visible');
  });
  