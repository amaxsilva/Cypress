export const menuElementsElements = {
    //Text Box
    itemTextBox: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-0'),
    nomeInput: () => cy.get('#userName'),
    emailInput: () => cy.get('#userEmail'),
    enderecoInput: () => cy.get('#currentAddress'),
    confirmacaoEnderecoInput: () => cy.get('#permanentAddress'),
    submitButton: () => cy.get('#submit'),

    //Check Box
    itemChecktBox: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-1'),
    checkBoxHome: () => cy.get('.rct-checkbox'),
    checkBoxDesktop: () => cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox'),
    checkBoxDownload: () => cy.get(':nth-child(3) > .rct-text > label'),
    setaHome: () => cy.get('.rct-collapse'),
    resultText: () => cy.get('#result'),
    
    //Radio Button
    itemRadioButton: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-2'),
    radioImpressive: () => cy.get('#impressiveRadio'),
    radioyes: () => cy.get('#yesRadio'),
    resultRadio: () => cy.get('.mt-3')

};
    //Web Tables
    //Buttons
    //Link
    