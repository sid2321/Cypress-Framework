import loginScreenSelectors from '../../selectors/login-screen-selectors.json'


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//This Command will login user based on product
// userID : userID of the user
// password : password of the user
// product : product user wants tos launch
Cypress.Commands.add('login', (userID, password, product) => {

    cy.get(loginScreenSelectors.userName).type(userID);
    cy.get(loginScreenSelectors.userPassword).type(password);
    cy.get(loginScreenSelectors.selectProductDropdown).within(() => {
        cy.get('input').click();
    })
    switch(product) {
        case 'Publication Wizard':
            cy.get(loginScreenSelectors.loginForm).within(() => {
                cy.get('ul').find('li').eq(1).click();
            })
            break;
        case 'Publisher':
             cy.get(loginScreenSelectors.loginForm).within(() => {
                cy.get('ul').find('li').eq(2).click();
            })
            break;  
        default:
           cy.get(loginScreenSelectors.loginForm).within(() => {
                cy.get('ul').find('li').eq(1).click();
            })       
    }
    cy.get(loginScreenSelectors.loginButton).click();
})