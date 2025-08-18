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
    resultRadio: () => cy.get('.mt-3'),

    //Web Tables
    itemWebTables: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-3'),
    addButton: () => cy.get('#addNewRecordButton'),
    firstNameInput: () => cy.get('#firstName'),
    lastNameInput: () => cy.get('#lastName'),
    emailWebTableInput: () => cy.get('#userEmail'),
    ageInput: () => cy.get('#age'),
    salaryInput: () => cy.get('#salary'),
    departmentInput: () => cy.get('#department'),
    submitWebTableButton: () => cy.get('#submit'),
    searchWebTableInput: () => cy.get('#searchBox'),
    deleteButton: () => cy.get('#delete-record-4'),
    editButton: () => cy.get('#edit-record-4'),

    //Buttons
    itemButtons: () => cy.contains('.menu-list li span.text', 'Buttons').parent('li'),
    doubleClickButton: () => cy.get('#doubleClickBtn'),
    mensagemDoubleClick: () => cy.get('#doubleClickMessage'),
    rightClickButton: () => cy.get('#rightClickBtn'),
    mensagemRightClick: () => cy.get('#rightClickMessage'),
    clickMeButton: () => cy.contains('button.btn-primary', 'Click Me').click(),
    mensagemClickMe: () => cy.get('#dynamicClickMessage'),
    
    //Link
    itemLinks: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-5'),
    linkMensagem: () => cy.get('#linkResponse'),
    
}
    