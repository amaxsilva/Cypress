// cypress/support/pages/homePage.js
const el = require('../elements/homeElements').homeElements;

class HomePage{

    voltarUmaPagina(){
        cy.go('back');
    }

    acessarHome() {
        cy.visit('/');
    }

    acessarMenuElements() {
        el.menuElements()
        .should('be.visible')
        .click();
    }

    acessarMenuForms() {
        el.menuForms()
        .should('be.visible')
        .click();
    }

    acessarMenuInteractions() {
        el.menuInteractions()
        .should('be.visible')
        .click();
    }

    acessarMenuAlerts() {
        el.menuAlerts()
        .should('be.visible')
        .click();
    }

    acessarMenuWidgets() {
        el.menuWidgets()
        .should('be.visible')
        .click();
    }


}
export default new HomePage();