//zainstaluj bibliotekę: npm install --save-dev cypress-file-upload
//do cypres.config dodaj: import 'cypress-file-upload';

/// <reference types="cypress"/>

describe ('E2E - Upload files', () => {
    it('Should apload files to input', () => {
        cy.visit('/index.php?controller=contract')
        cy.get('#fileUpliad').attachFile("../fixtures/kot.jpeg")
        //sprawdzamy co się dzieje po manualnym dodaniu pliku -> pojawia się span po którym sprawdzamy
        cy.get('spsn.filename').should('contain', 'kot.jpeg')
    })
})