/// <reference types="cypress"/>

describe ('E2E - dropdown', () => {
    it('Should select element from dropdown', () => {
        cy.visit('/index.php?id_category=3&controller=category')

        //po nazwie
        cy.get('#selectProductSort').select('In stock')

        //po value 
        cy.get('#selectProductSort').select('price:asc')

        //po indeksie
        cy.get('#selectProductSort').select(6)
        })
    })
    it.only('select each elements from dropdown', () => {
        cy.visit('/index.php?id_category=3&controller=category')
        cy.get('#selectProductSort').then(dropdown => {
            cy.wrap(dropdown).find('option').each(element => {
                cy.wrap(dropdown).select(element.text())
            })
        })
    })
