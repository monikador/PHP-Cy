/// <reference types="cypress"/>

describe ('E2E - Invoke', () => {
    it('Should open home page - automationpractice.com', () => {
        cy.visit('/')
    })
    it('Should get info from element', () => {
        // pobieranie wartości z danego elementu (tekst)
        cy.get('[title="Contact us"]').invoke('text').then(foundText => {
            cy.log(foundText)
        })
        //pobieranie wartości z atrybutu danego elementu
        cy.get('[title="Contact us"]').invoke('attr', 'href').then(foundLink => {
            cy.log(foundLink)
        })
        cy.get('[title="Contact us"]').invoke('attr', 'title').then(foundTitle => {
            cy.log(foundTitle)
        })
        // pobieranie wartośći value (tekst wprowadzony w inputa)
        cy.get('#search_query_top').type('some text').invoke('prop', 'value').then(foundValue => {
            cy.log(foundValue)
        })
    })
})