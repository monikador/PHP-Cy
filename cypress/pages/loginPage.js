export class LoginPage {

    emailInput() { return cy.get('[placeholder="Email"]') }
    passwordInput() { return cy.get('[name="password"]') }
    loginButton() { return cy.get('.ladda-label').contains('Login') }
    wrongCredentials() { return cy.get('.message') }


    login(login, password) {
        this.emailInput().type(login, {force: true})
        this.passwordInput().type(password, {force: true})
        this.loginButton().click({force: true})
    }
}