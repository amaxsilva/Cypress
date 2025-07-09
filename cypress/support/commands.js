// Importe APENAS o @faker-js/faker
import { faker } from '@faker-js/faker/locale/pt_BR';

Cypress.Commands.add('gerarUserData', () => {
    return {
        nome_completo: faker.person.fullName(), // Usando faker.person.fullName() do @faker-js/faker
        email: faker.internet.email(),
        endereco: faker.location.streetAddress(), // Usando faker.location.streetAddress()
        confirmacao_endereco: faker.location.streetAddress()
    };
});

// --- COMANDO AJUSTADO PARA O CENÁRIO DA WEB TABLE ---
Cypress.Commands.add('gerarDadosUsuario', (alias) => {
    // Todos os dados podem ser gerados com o 'faker' (que já está configurado para pt_BR)
    
    const dadosUsuario = {
        // Dividir o nome completo em nome e sobrenome
        nome: faker.person.firstName(), // Prefira usar faker.person.firstName() e lastName() diretamente
        sobrenome: faker.person.lastName(),
        email: faker.internet.email(),
        idade: faker.number.int({ min: 18, max: 60 }).toString(),
        salario: faker.number.int({ min: 10000, max: 100000 }).toString(),
        departamento: faker.commerce.department()
    };

    cy.wrap(dadosUsuario).as(alias); // Armazena os dados gerados com o alias
});

// Comando para gerar um novo nome para edição
Cypress.Commands.add('gerarNovoNomeParaEdicao', (alias) => {
    const novoNome = faker.person.firstName(); // Usa o faker com locale pt_BR
    cy.wrap(novoNome).as(alias);
});