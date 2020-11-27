/// <reference types="cypress" />
import 'cypress-xpath';
var salesCenterMenu = 'div[class*=MuiButtonBase-root]';
var leadsDashBoard = "//div[@role='tooltip']//div[text()='Leads']";
var plusButton = "(//span[@class='MuiButton-label'])[1]";
var addLeadButton = "//img[@alt='Add Lead']";
var firstName = "input[name='firstName']";
var leadsHeading = "//h3[text()='Leads']";
var userProfileButton="//div[contains(@class,'MuiToolbar-regular')]/button[2]";
var logoutLink="//span[text()='Logout']";


class dashboard_page {

    navigateToLeads() {
        cy.get(salesCenterMenu, { timeout: 20000 }).should('be.visible').trigger('mouseover');
        cy.xpath(leadsDashBoard).click();
        cy.xpath(leadsHeading, { timeout: 20000 }).should('have.text', 'Leads');        

    }
    navigateToLeadForm() {
        cy.xpath(plusButton).click();
        cy.xpath(addLeadButton).click();
        cy.get(firstName).should('be.visible');
    }

    logoutOfApplication(){
        cy.xpath(userProfileButton).click();
        cy.xpath(logoutLink).click();        

    }
}
export default dashboard_page

