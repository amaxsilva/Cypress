
# 🧪 Cypress Test Automation Project

Este repositório contém testes automatizados end-to-end com **Cypress** usando boas práticas de automação, estrutura com PageObjects e integração com **Cucumber (BDD)** usando o `@badeball/cypress-cucumber-preprocessor`.

---

## 🚀 Tecnologias Utilizadas

- [Cypress](https://docs.cypress.io/)
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- JavaScript ou TypeScript
- Node.js
- Yarn ou NPM
- GitHub Actions (CI)

---

## 📁 Estrutura do Projeto

```
📦 cypress/
 ┣ 📂 e2e/
 ┃ ┣ 📂 features/           # Testes em formato BDD (.feature)
 ┃ ┣ 📂 pages/              # Page Objects
 ┃ ┗ 📂 step_definitions/   # Definições dos passos (.js ou .ts)
 ┣ 📂 support/              # Setup e comandos globais
┣ 📜 cypress.config.js      # Configurações do Cypress
┣ 📜 package.json
┣ 📜 tsconfig.json          # (se usar TypeScript)
```

---

## ⚙️ Instalação do Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

---

## 🧩 Configuração do Cucumber

No `cypress.config.js`:

```js
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "http://localhost:3000",
  },
});
```

No `package.json`:

```json
"devDependencies": {
  "@bahmutov/cypress-esbuild-preprocessor": "^2.1.5",
  "@badeball/cypress-cucumber-preprocessor": "^17.0.1",
  "cypress": "^13.0.0",
  "esbuild": "^0.17.0"
}
```

No `cypress/support/e2e.js`:

```js
import './commands';
import 'cypress-real-events/support';
```

E adicione o arquivo `cypress/support/commands.js` com comandos customizados, se necessário.

---

## 🧪 Execução dos Testes

### Modo interativo (GUI)

```bash
npx cypress open
```

### Modo headless (CI ou terminal)

```bash
npx cypress run
```

### Executar testes com tag (Cucumber)

```bash
npx cypress run --env TAGS='@login'
```

---

## 💡 Exemplo de Cenário BDD

**`login.feature`**

```gherkin
@login
Feature: Login do sistema

  Scenario: Usuário realiza login com sucesso
    Given que o usuário está na página de login
    When ele preenche usuário e senha corretamente
    Then ele deve ver a mensagem "Bem-vindo"
```

**`step_definitions/login.steps.js`**

```js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está na página de login", () => {
  cy.visit("/login");
});

When("ele preenche usuário e senha corretamente", () => {
  cy.get("#usuario").type("admin");
  cy.get("#senha").type("123456");
  cy.get("button[type=submit]").click();
});

Then("ele deve ver a mensagem {string}", (mensagem) => {
  cy.contains(mensagem).should("be.visible");
});
```

---

## 🧼 Boas Práticas

- Use **Page Objects** para manter os testes organizados
- Use **tags** para facilitar a execução por tipo de teste
- Crie comandos customizados com `Cypress.Commands.add`
- Evite dependências externas usando mocks e intercepts

---

## 🔧 TypeScript (opcional)

Se desejar usar TypeScript:

```bash
touch tsconfig.json
```

**`tsconfig.json` básico:**

```json
{
  "compilerOptions": {
    "target": "es6",
    "types": ["cypress"],
    "baseUrl": "./",
    "paths": {
      "@pages/*": ["cypress/e2e/pages/*"]
    }
  },
  "include": ["cypress/**/*.ts"]
}
```

Renomeie arquivos `.js` para `.ts` conforme for convertendo.

---

## 🤖 Integração Contínua (GitHub Actions)

**`.github/workflows/testes-e2e.yml`**:

```yaml
name: Testes E2E

on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Instalar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Instalar dependências
        run: npm install

      - name: Rodar Cypress
        run: npx cypress run
```

---

## 📚 Documentação Adicional

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Best Practices do Cypress](https://docs.cypress.io/guides/references/best-practices)

---

## 🛠️ Requisitos

- Node.js >= 18
- Cypress >= 13
- Navegador Chrome ou Electron instalado (para modo GUI)

---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).
