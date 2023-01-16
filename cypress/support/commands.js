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

// LOGIN: Navigate to the login page, enter valid email and password and click submit
Cypress.Commands.add('login', (email, password) => {
  // Navigating to the login page
  cy.visit('/user/login')

  // Typing in valid login and password, clicking 'Log in' button
  cy.get('#normal_login_email').type(email)
  cy.get('#normal_login_password').type(password)
  cy.get('[type="submit"]').click()
})
