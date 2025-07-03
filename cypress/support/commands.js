Cypress.Commands.add('gerarUserData', () => {
  const faker = require('faker-br'); // Instale com: npm install faker-br --save-dev

    return {
        nome_completo: faker.name.findName(),
        email: faker.internet.email(),
        endereco: faker.address.streetAddress(),
        confirmacao_endereco: faker.address.streetAddress()
    };
});