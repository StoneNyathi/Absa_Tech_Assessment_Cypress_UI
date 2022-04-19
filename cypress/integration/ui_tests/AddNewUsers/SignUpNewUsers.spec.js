/// <reference types="cypress"/>

import { UsersHomePageActions } from "../../../pageobjects/page_actions/UsersHomePageActions";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const usersHomePage = new UsersHomePageActions()
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()

Given('I navigate to the Way2Automation website', () => {
    cy.log('starting test')
    usersHomePage.navigateToHomePageUrl()
})

When('I click on Add User button', () => {
    usersHomePage.clickAddUserButton()
    cy.window()
})

Then('Verify that the User table exists', () => {
    cy.title().should('eq', "Protractor practice website - WebTables")
})

Then('I Verify that the Add User Pop-up is displayed', () => {
    cy.get('.modal-header > .ng-binding').should('be.visible', { timeout: 6000 })
})

And('Enter the (.*) inputValue', (dataTable) => {

    dataTable.hashes().array.forEach(row => {

        usersHomePage.fillFirstName(row.FirstName + id)
        usersHomePage.fillLastName(row.LastName + id)
        usersHomePage.fillUserName(row.UserName + id)
        usersHomePage.fillPassword(row.Password)
        usersHomePage.selectCompanyRadioButton()
        usersHomePage.fillEmailAddress(row.Email)
        usersHomePage.fillCellPhone(row.Cell)
    });
})




