/// <reference types="cypress"/>

describe('Filtering All Dog Breeds', () => {
    beforeEach(() =>{
        cy.log('starting test')
        cy.visit('https://dog.ceo/dog-api/')
        cy.get('.mobile-menu > a > .fa').click()
        cy.get('.vertical-nav > ul > :nth-child(2) > a').click({waitForAnimations:false})
    })

    it('Should be able to list all the dog breeds', () =>{
        cy.get('.dog-selector').should('have.length.greaterThan',0)
        cy.get('.dog-selector')
        cy.request('GET', '/dog-api/breeds-list').then((response)=> {
            expect(response.status).equal(200)
            expect(response.body.data).to.not.be.null
        cy.log(response.body.data)
        })
    })

    it('verify - "retriever" breed is available in the All dog Breed list', () =>{
        cy.get('.dog-selector').contains("retriever")
    })
})