/// <reference types="cypress" />
import 'cypress-xpath';
var firstName = "input[name='firstName']";
var requiredFiledsCheckBox="//div[contains(@class,'MuiPaper-elevation2')]//input[@type='checkbox']";
class addLead_page {

 submitLead() {
       cy.get(requiredFiledsCheckBox).click();    
    
 }
}
export default addLead_page

