const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    e2e: {
        //Executa o cenário 2 vezes em caso de falha
        retries:{
            runMode: 1,
            openMode: 1
        },
        video: true,
        screenshotOnRunFailure: true,
        pageLoadTimeout: 40000,
        chromeWebSecurity: false,
    // Desativa tratamento de exceções não capturadas
        setupNodeEvents(on, config) {
        on('uncaught:exception', () => false);
        },
        specPattern: "cypress/e2e/features/**/*.feature",
        supportFile: "cypress/support/support.js",
        baseUrl: "https://demoqa.com",
        async setupNodeEvents(on, config) {
        const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
    });

    on("file:preprocessor", bundler);
    await addCucumberPreprocessorPlugin(on, config);

    return config;
    },
},
});