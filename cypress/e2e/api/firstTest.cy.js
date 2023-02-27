/// <reference types="cypress"/>

describe ('API', () => {
    beforeEach (function() {
        cy.fixture('example').then(data => {
            this.dataApi = data
        })
        cy.fixture('tags').then(tags => {
            this.data = tags
        }) 
    })
    it('Should have a correct tags', () => {
        cy.intercept('GET', 'https://api.realworld.io/api/tags').as('requestTags')
        cy.visit('https://angular.realworld.io/')
        cy.wait("@requestTags")
        cy.get("@requestTags").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain('welcome').and.to.contain('implementations')
        })
    })
    it('Should have forbidden loggin status 403', function() {
        cy.intercept('POST', 'https://api.realworld.io/api/users/login').as('requestLogin')
        cy.get('.nav-link').contains('Sign in').click()
        cy.login('mon@mon.pl', 'ddd')
        cy.wait('@requestLogin')
        cy.get('@requestLogin').then(status => {
            console.log(status)
            expect(status.response.statusCode).to.equal(403)
           // cy.fixture('example').then (data => { if we want to use data from fixtures only once we are doing it this way, but when mor than one we should add hook 'beforeEach'
                expect(status.response.statusMessage).to.equal(this.dataApi.statusMessage403)
           // })  
        })
    })
    it('should login correctly', function() {
        cy.intercept('GET', 'https://api.realworld.io/api/tags', { fixture: 'tags.json' }).as('requestTags')
        cy.login("m.dorula77@gmail.com", "Monika*8")
        cy.wait("@requestTags")
        cy.get("@requestTags").then(res => {
            console.log(res)
            expect(res.response.body.tags).to.equal(this.data.tags)
        })
        
    })
})