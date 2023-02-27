/// <reference types="cypress"/>

describe ('E2E - Alerts', () => {
    it('Should and expect assertion', () => {
        cy.visit('/')
        
        //werygikacja tekstu
        cy.get('a[title="Contact Us"]').should('contain', 'Contact Us') //lub
        cy.get('a[title="Contact Us"]').then(zakladka => {
            expect(zakladka).to.contain("Contact Us")
        })
        // weryfikacja czy element nie zawiera tekstu
        cy.get('a[title="Contact Us"]').should('not.contain', 'contact us')
        cy.get('a[title="Contact Us"]').then(zakladka => {
            expect(zakladka).not.to.contain('contact us')
        })
        // weryfikacja czy input posiada jakąś klasę
        cy.get('#search_query_top').should('have.class', 'form-control')
        cy.get('#search_query_top').then.apply(search => {
            expect(search).to.have.class('form-control')
        })
        //weryfikacja czy element jest widoczny
        cy.get('#search_query_top').should('be.visible') //not.be.visible
        cy.get('#search_query_top').then(search => {
            expect(search).to.be.visible()
        })
        //weryfikacja ilości pobranych elementów
        cy.get('ul.sf-menu').find('li').should('have.length', 14)
        cy.get('ul.sf-menu').find('li').then(tabs => {
            expect(tabs).to.have.length(14)
        })
        //weryfikacja wartości css danego elementu
        cy.get('#search_query_top').should('have.css', 'line-height', '45px')
        cy.get('#search_query_top').then(search => {
            expect(search).to.have.css('line-height', '45px')
        })
    })
})