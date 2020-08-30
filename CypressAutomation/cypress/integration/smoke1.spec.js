/// <reference types="cypress" />
import 'cypress-xpath';
var username='input[name=email]';
context('Utilities', () => {
    beforeEach(() => {
        cy.visit('/');
    })
  
    it('My Application Demo', () => {
        
      // https://on.cypress.io/_
      cy.get(username).type("rabcv@yahoo.com");
      cy.get('input[name=password]').type('$Babclink185');
      cy.get('button[type=submit]').click();
      cy.get('div[class*=MuiButtonBase-root]').trigger('mouseover');
      cy.xpath('//div[@role="tooltip"]//div[text()="Leads"]').click();
      //cy.get('div[role=tooltip]').click();
      //npx run-s cypress:run merge generate_mochawesome_report
    })
  
    
  
    
  
    
  })