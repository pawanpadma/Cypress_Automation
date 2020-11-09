/// <reference types="cypress" />
import 'cypress-xpath';
var username='input[name=email]';
var password='input[name=password]';
var loginBtn='button[type=submit]';
class login_page {

 loginToAPP() {
    cy.get(username).type("google@google.com");
    cy.get(password).type('google!');
    cy.get(loginBtn).click();        
    
 }
}
export default login_page

