require('cypress-xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar false previne o Cypress de falhar o teste
    return false;
});
