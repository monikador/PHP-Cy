/// <reference types="cypress"/>

describe ('E2E - variables', () => {
    it('Environment variables', () => {
        cy.visit(Cypress.env('url'))
        })
    })

    //npx cypress open --env configFile=dev