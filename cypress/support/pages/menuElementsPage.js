// cypress/support/pages/menuElementsPage.js
const el = require('../elements/menuElementsElements').menuElementsElements;

class MenuElementsPage{

    // Text Box
    clicarTextBox(){
        el.itemTextBox().should('be.visible').click();
    }

    preencherFormulario(usuario) {
        el.nomeInput().should('be.visible').type(usuario.nome_completo);
        el.emailInput().should('be.visible').type(usuario.email);
        el.enderecoInput().should('be.visible').type(usuario.endereco);
        el.confirmacaoEnderecoInput().should('be.visible').type(usuario.confirmacao_endereco);
    }

    submeterFormulario(){
        el.submitButton().should('be.visible').click();
    }
    
    validarDadosExibidos(usuarioEsperado) {
        cy.get('#output').should('be.visible').within(() => {
            cy.get('#name').should('have.text', `Name:${usuarioEsperado.nome_completo}`);
            cy.get('#email').should('have.text', `Email:${usuarioEsperado.email}`);
            cy.get('#currentAddress').should('contain', usuarioEsperado.endereco);
            cy.get('#permanentAddress').should('contain', usuarioEsperado.confirmacao_endereco);
        });
    }

    //Check Box
    clicarCheckBox(){
        el.itemChecktBox().should('be.visible').click();
    }
    
    clicarCheckBoxHome(){
        el.checkBoxHome().click();
    }
    
    clicarCheckBoxDesktop(){
        el.checkBoxDesktop().click();
    }

    clicarCheckBoxDownload(){
        el.resultText().should('be.visible').invoke('text').then((textoResultado) => {
        if (textoResultado.includes('You have selected :desktop notes commands')) {
            el.checkBoxDownload().click();
        } else {
            cy.log('Nenhum item foi marcado');
        }
    });
    }
    
    desmarcarCheckBoxHome(){
        el.checkBoxHome().click();
    }
    
    expandirCheckBox(){
        el.setaHome().click();
    }

    // Radio Button
    clicarRadioButton(){
        el.itemRadioButton().should('be.visible').click();
    }

    clicarRadioYes(){
        el.radioyes().should('be.visible').click();
    }

    clicaRadioImpressive(){
        el.resultRadio().should('be.visible').invoke('text').then((textoResultado) => {
        if (textoResultado.includes('You have selected Yes')) {
            el.radioImpressive().click();
        } else {
            cy.log('Nenhum item foi marcado, por favor analise o sistema');
        }
    });
    }

    // Web Tables
    clicarWebTables(){
        el.itemWebTables().should('be.visible').click();
    }

    clicarAddButton(){
        el.addButton().should('be.visible').click();
    }

    preencherFormularioWebTable(usuario) {
        el.firstNameInput().should('be.visible').type(usuario.nome);
        el.lastNameInput().should('be.visible').type(usuario.sobrenome);
        el.emailWebTableInput().should('be.visible').type(usuario.email);
        el.ageInput().should('be.visible').type(usuario.idade);
        el.salaryInput().should('be.visible').type(usuario.salario);
        el.departmentInput().should('be.visible').type(usuario.departamento);
    }

    submeterFormularioWebTable() {
        el.submitWebTableButton().should('be.visible').click();
    }

    pesquisarItemWebTable(nome) {
        el.searchWebTableInput().should('be.visible').clear().type(nome);
    }

    excluirItemWebTable() {
        el.deleteButton().should('be.visible').click(); 
    }

    editarItemWebTable() {
        el.editButton().should('be.visible').click();
        el.firstNameInput().should('be.visible').clear().type('Ariel');
    }

    // Buttons
    clicarButtons() {
        el.itemButtons().should('be.visible').click();
    }

    clicarDoubleClickMe() {
        el.doubleClickButton().should('be.visible').dblclick();
    }   

    validarMensagemDoubleClick() {
        el.mensagemDoubleClick.should('be.visible').and('have.text', 'You have done a double click');   
    }

    clicarRightClickMe() {
        el.rightClickButton().should('be.visible').rightclick();
    }

    validarMensagemRightClick() {
        el.mensagemRightClick.should('be.visible').and('have.text', 'You have done a right click');
    }

    clicarClickMe() {
        el.clickMeButton().should('be.visible').click();
    }

    validarMensagemClickMe() {
        el.mensagemClickMe.should('be.visible').and('have.text', 'You have done a dynamic click');
    }

    // Link
    clicarMenuLink() {
        el.itemLinks().should('be.visible').click();
    }

    clicarLinkHome() {
        el.linkHome().should('be.visible').click();
    }

    validarLinkHome() {
        cy.url().should('include', 'https://demoqa.com/');
    }

    clicarLinkDynamic() {
        el.linkDynamic().should('be.visible').click();
    }

    validarLinkDynamic() {
        cy.url().should('include', 'https://demoqa.com/');
    }

    // Método para configurar o mock da nova aba
    setupTabMock() {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
    }

  // Método para validar a URL mockada
    validateTabUrl(expectedUrl) {
        cy.get('@windowOpen').should('be.calledWith', expectedUrl);
    }

  // Método genérico para clicar em qualquer link (estático ou dinâmico)
    clickLink(linkTextOrId) {
        if (linkTextOrId === 'Home') {
        // Link estático (exemplo: seleciona por texto)
        cy.contains('a', 'Home').click();
    } else {
      // Link dinâmico (seleciona por ID fixo ou atributo)
      cy.get('#dynamicLink').click(); // Ou: cy.contains('a', /^Home/).click()
    }
    }

}
export default new MenuElementsPage();