import 'cypress-file-upload';
import "cypress-audit/commands";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add("openMainURL", () => {
    cy.visit("https://phptravels.net/login");
})


//trening
Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
    // Wait until the iframe (Google reCAPTCHA) is totally loaded
    cy.wait(500);
    cy.get('#google-recaptcha-domainchecker1 *> iframe')
        .then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body)
                .find('.recaptcha-checkbox-border')
                .should('be.visible')
                .click();
        });
});
Cypress.Commands.add("openTshirtsTab", () => {
    cy.visit("http://automationpractice.com/index.php?id_category=5&controller=category");
})
Cypress.Commands.add("searchPhrase", (tekst, delayValue) => {
    cy.get('#search_query_top').type(tekst, {delay: delayValue} )
})
Cypress.Commands.add('login', (login, password) => {
    cy.get('[placeholder="Email"]').clear()
    cy.get('[placeholder="Password"]').clear()
    cy.get('[placeholder="Email"]').type(login)
    cy.get('[placeholder="Password"]').type(password)
    cy.get('[type="submit"]').click()
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })