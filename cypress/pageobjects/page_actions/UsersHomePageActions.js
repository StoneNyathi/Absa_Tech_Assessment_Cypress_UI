/// <reference types="cypress"/>

export class UsersHomePageActions {

    navigateToHomePageUrl() {
        cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/')
    }

    fillFirstName(value) {
        const field = cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine', {timeout:6000})
        field.clear()
        field.type(value)
        return this
    }

    fillLastName(value) {
        const field = cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine')
        field.clear()
        field.type(value)
        return this
    }

    fillUserName(value) {
        const field = cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value) {
        const field = cy.get('tbody > :nth-child(4) > :nth-child(2) > .ng-pristine')
        field.clear()
        field.type(value)
        return this
    }

    selectCompanyRadioButton() {
        const field = cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .ng-pristine')
        field.clear()
        field.click()
        return this
    }

    selectRoleDropdown(value) {
        const field = cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine')
        field.clear()
        field.select(value)
        return this
    }

    fillEmailAddress(value) {
        const field = cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine')
        field.clear()
        field.type(value)
        return this
    }

    fillCellPhone(value) {
        const field = cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine')
        field.clear()
        field.type(value)
        return this
    }
    clickSaveButton() {
        const field = cy.get('.btn-success')
        field.click()
        return this
    }

    clickCloseButton() {
        const field = cy.get('.btn-danger')
        field.click()
        return this
    }

    clickAddUserButton() {
        const field = cy.get('thead > :nth-child(2) > td > .btn')
        field.click()
        return this
    }

}