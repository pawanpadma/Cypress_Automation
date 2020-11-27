/// <reference types="cypress" />
import 'cypress-xpath';
var username='input[name=email]';
var password='input[name=password]';
var loginBtn='button[type=submit]';
class login_page {

 loginToAPP() {
    cy.get(username).type("abc@abc.com");
    cy.get(password).type("abc!");
    cy.get(loginBtn).click();        
    
 }
}
export default login_page

