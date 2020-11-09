/// <reference types="cypress" />
import login_page from '../pageobjects/login_page'
import dashboard_page from '../pageobjects/dashboard_page'
const login = new login_page();
const dashboard = new dashboard_page();
context('Utilities', () => {
  beforeEach(() => {
    cy.visit('/#/');
  })

  it('My Application Demo', () => {


    login.loginToAPP();
    dashboard.navigateToLeads();
    dashboard.navigateToLeadForm();

  })






})