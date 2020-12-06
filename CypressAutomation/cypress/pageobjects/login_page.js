/// <reference types="cypress" />
import 'cypress-xpath';
var username='input[name=email]';
var password='input[name=password]';
var loginBtn='button[type=submit]';
class login_page {

 loginToAPP(user,pass) {
    cy.get(username, { timeout: 20000 }).type(user);
    cy.get(password).type(pass);
    cy.get(loginBtn).click();        
    
 }
}
export default login_page

