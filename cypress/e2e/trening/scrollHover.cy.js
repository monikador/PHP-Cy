/// <reference types="cypress"/>

describe ('E2E - Scroll / Hover', () => {
    it('Should hover over element', () => {
        cy.visit('/')
        cy.get('a[title="Dresses"]').eq(1).trigger('focus')
        cy.get('li.sfHover a[title="summer Dresses"]').click()
    })
    it('Should scroll to element "Specials"', () => {
        cy.get('a[title="Specials]').first().scrollIntoView()
    })
})
