/// <reference types="cypress"/>

describe ('Sending directly from the api', () => {
    beforeEach (function() {
        cy.fixture('example').then(data => {
            this.dataApi = data
        })
        cy.fixture('tags').then(tags => {
            this.data = tags
        }) 
    })
    it('Autorization and adding new articule', () => {
        const autorizationData = {
                "user": {
                    "email": "m.dorula77@gmail.com",
                    "password": "Monika*8"
                }
        }
        cy.request("POST", "https://api.realworld.io/api/users/login", autorizationData)
        .its("body").then(res => {
            //console.log(res)
            const authToken = res.user.token
            //console.log(authToken)

            const articleData = {
                "article": {
                    "tagList": [],
                    "title": "test directly from the api ",
                    "description": "test",
                    "body": "test"
                }
            }

            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: articleData,
                headers: {
                    "Authorization": "Token " + authToken
                }
            }).then(res => {
                expect(res.status).to.equal(200)
            })
        })
    })
})