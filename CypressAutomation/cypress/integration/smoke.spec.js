/// <reference types="cypress" />
import login_page from '../pageobjects/login_page'
import dashboard_page from '../pageobjects/dashboard_page'
const login = new login_page();
const dashboard = new dashboard_page();

describe('Utilities', function () {
  
  beforeEach(function () {
    const env = Cypress.env().environment;
    cy.log("env is "+env);
    cy.fixture(env).as('userData')
     
    cy.visit('/#/');
  })
  

  it('My Application Demo and submit', function () {

    cy.log("env is "+this.userData.username);
    login.loginToAPP(this.userData.username,this.userData.password);
    dashboard.navigateToLeads();
    dashboard.navigateToLeadForm();

  })

  it('login logout', function () {

    expect(false).to.be.true
    login.loginToAPP(this.userData.username,this.userData.password);
    dashboard.navigateToLeads();
    dashboard.navigateToLeadForm();

  })
afterEach(function () {
 dashboard.logoutOfApplication();
})



})