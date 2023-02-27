/// <reference types="cypress"/>

describe ('E2E - Alerts', () => {
    it('Should click on alert and check it tresc', () => {
        cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty/')
        cy.get('#alert').click()
        cy.on('window:alert', tresc => {
            expect(tresc).to.equal("Przykładowa treść alertu")
        })
    })
    it('Should click on alert confirm and check its tresc', () => {
        cy.get('#alert-confirm').click()
        cy.on('window:confirm', tresc => {
            expect(tresc).to.equal('Zaakceptuj aby kontynuować!')
        })

        //klikanie w OK lub anuluj na alercie
        cy.on('window:confirm', () => false )
    })
})