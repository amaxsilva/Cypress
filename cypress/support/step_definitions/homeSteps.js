import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from'../pages/homePage';

console.log('🚀 homeSteps carregado!');

Given("que acesso a demoqa", () => {
	HomePage.acessarHome();
});

Then("o menu Elements deve estar visível", () => {
	HomePage.acessarMenuElements();
});

Then("o menu Forms deve estar visível", () => {
	HomePage.voltarUmaPagina();
	HomePage.acessarMenuForms();
});

Then("o menu Alerts deve estar visível", () => {
	HomePage.voltarUmaPagina();
	HomePage.acessarMenuAlerts();
});

Then("o menu Widgets deve estar visível", () => {
	HomePage.voltarUmaPagina();
	HomePage.acessarMenuWidgets();
});

Then("o menu Interactions deve estar visível", () => {
	HomePage.voltarUmaPagina();
	HomePage.acessarMenuInteractions();
	HomePage.voltarUmaPagina();
});


