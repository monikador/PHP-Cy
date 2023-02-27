/// <reference types="cypress"/>

describe ('E2E - chekbox', () => {
    it('Should select checkbox', () => {
        cy.visit('/index.php?id_category=3&controller=category')
        //znajdź id rodzica w którym znajdują się checkboxy (inputy), następnie znajdź wszystkie inputy, które tam są i zapisz je w foundCheckboxes. Następnie zaznacz je pojedynczo.
        cy.get('#ul_layered_category_0').find('input').then(foundChexboxes => {
            cy.get(foundChexboxes).eq(0).check()
            cy.get(foundChexboxes).eq(1).check().invoke('prop', 'checked').then(justCheckedCheckbox => {
                cy.log(justCheckedCheckbox)
            })
        })
        //zaznacz od razu wszystkie znalezione w rodzicu checkboxy
        cy.get('#ul_layered_id_attribute_group_1').find('input').check()
        })
    })
