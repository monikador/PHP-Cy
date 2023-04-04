/// <reference types="cypress"/>
import {
    LoginPage
} from "../../pages/loginPage"
import {
    DashboardPage
} from "../../pages/dashboardPage"
import faker from '../node_modules/faker';


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const faker = require('faker');

describe('Login suite', () => {
    beforeEach(() => {
        cy.visit('https://phptravels.net/login')
    })
    it.only('Should not login without password', () => {
        loginPage.login('user@phptravels.com', '')
        loginPage.wrongCredentials().invoke('text').then((text) => {
            expect(text).to.contain('Wrong credentials. try again!')
        })
    })
    it.only('Should not login with wrong password', () => {
        loginPage.login('user@phptravels.com', faker.lorem.word())
        loginPage.wrongCredentials().invoke('text').then((text) => {
            expect(text).to.contain('Wrong credentials. try again!')
        })
    })
    it.only('Should not login without email', () => {
        loginPage.login('', 'demous')
        loginPage.wrongCredentials().invoke('text').then((text) => {
            expect(text).to.contain('Wrong credentials. try again!')
        })
    })
    it.only('Should not login with wrong email', () => {
        loginPage.login(faker.internet.email(), 'demouser')
        loginPage.wrongCredentials().invoke('text').then((text) => {
            expect(text).to.contain('Wrong credentials. try again!')
        })
    })
    it('Should login using correct email and password', () => {
        loginPage.login('user@phptravels.com', 'demouser')
        dashboardPage.userBio().should('be.visible')

    })
})