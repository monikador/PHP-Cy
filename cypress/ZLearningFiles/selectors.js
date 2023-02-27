//po znaczniku
cy.get('a')

//po inentyfikatorze
cy.get('#search_query_top')

//po klasie
cy.get('.form-control')

//po atrybutach
cy.get('[name="search_query"]')
cy.get('[placeholder="Search"]')

//znacznik + atrybut
cy.get('input[name="search_query"]')

//kilka atrybutów
cy.get('[src="https://automationpractice.com/modules.jpeg"][width="381"]')

//własny atrybut stworzony przez dev lub QA - zalecana praktyka
cy.get('[data-cy="created_text"]')

//po tekscie
cy.contains('Shop now!')

// atrybut + tekst
cy.contains('[title="contact_us"]', 'Contact us')

// znajdź tag 'li' którego rodzicem jest element o id home_page. Znajdź wszystkie li w tym rodzicu i wybierz drugi z nich (ineks 1)
cy.get('li').parents('#home_page').find('li').eq(1)
// lub pierwszy (indeks 0 lub first)
cy.get('li').parents('#home_page').find('li').first()
// lub zawierający tekst
cy.get('li').parents('#home_page').find('li').contains('Best Sellers')