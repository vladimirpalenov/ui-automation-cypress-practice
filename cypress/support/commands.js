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

// login: Authorization by sending API request including email and password, saving token and userId to local storage
Cypress.Commands.add('login', (email, password) => {
  // Navigating to the landing page
  cy.visit('/')

  // Sending authorization request, saving token and userId in local storage
  cy.request('POST', 'https://server-prod.pasv.us/user/login', {
    email: email,
    password: password,
  }).then(response => {
    // Saving values of token and userId from payload in local storage var
    window.localStorage.setItem('token', response.body.payload.token)
    window.localStorage.setItem('userId', response.body.payload.userId)
    process.env[USER_ID] = response.body.payload.userId
  })
  // Reload the browser
  cy.reload()
})
