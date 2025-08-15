export const homeElements = {
  //menus
    menuElements: () => cy.contains('.card-body', 'Elements'),                              
    menuForms: () => cy.contains('.card-body', 'Forms'),
    menuInteractions: () => cy.contains('.card-body', 'Interactions'),
    menuWidgets: () => cy.contains('.card-body', 'Widgets'),
    menuAlerts: () => cy.contains('.card-body', 'Alerts, Frame & Windows'),
};