/// <reference types="cypress"/>

describe ('E2E - Home page', () => {
    it('Should open home page - automationpractice.com', () => {
        cy.visit('/')
    })
    it('Should enter text into the input, delete last character, enter each character with delay and click enter', () => {
        //cy.get('#search_query_top').type('some text{backspace}{enter}', {delay: 500} )
        cy.searchPhrase("Nowy takst{backspace}", 1200) // <- from comments.js 
    })
    it('Should clear text from input', () => {
        cy.get('#search_query_top').clear()
    })
})