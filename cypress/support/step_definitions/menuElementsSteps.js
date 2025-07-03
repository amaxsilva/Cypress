import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/homePage';
import MenuElementsPage from '../pages/menuElementsPage'

When(`clico no menu Elements`, () => {
    HomePage.acessarMenuElements();
});

When(`clico na opção text box`, () => {
    MenuElementsPage.clicarTextBox();
});

Then(`sistema deve permitir o input de nome completo, email, endereço e confirmação de endereço`, () => {
    cy.gerarUserData().then((usuario) => {
        MenuElementsPage.preencherFormulario(usuario);
        MenuElementsPage.submeterFormulario();
        // Agora passamos o usuário diretamente para a validação
        MenuElementsPage.validarDadosExibidos(usuario);
    });
});

//CheckBox
When(`cliclo na opção Check box`, () => {
    MenuElementsPage.clicarCheckBox();
});

Then(`sistema deve permitir marcar o check box Home`, () => {
    MenuElementsPage.clicarCheckBoxHome();
});

Then(`desmarcar o check box Home`, () => {
    MenuElementsPage.desmarcarCheckBoxHome();
});

Then(`expandir e marcar dois check box`, () => {
    MenuElementsPage.expandirCheckBox();
    MenuElementsPage.clicarCheckBoxDesktop();
    MenuElementsPage.clicarCheckBoxDownload();
});

//RadioBox
When(`cliclo na opção Radio Button`, () => {
    MenuElementsPage.clicarRadioButton
});

Then(`sistema deve permitir marcar o Radio Button yes`, () => {
    MenuElementsPage.clicarRadioYes
});

Then(`marcar o Radio Button Impressive`, () => {
    MenuElementsPage.clicaRadioImpressive
});