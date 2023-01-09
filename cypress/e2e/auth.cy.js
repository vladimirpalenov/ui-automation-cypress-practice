describe('Authentification', () => {
  it('Log in with valid credentials', () => {
    // Navigating to the login page
    cy.visit('/user/login')

    // Typing in valid login and password, clicking 'Log in' button
    cy.get('#normal_login_email').type('palenov@gmail.com')
    cy.get('#normal_login_password').type('Sergey9659')
    cy.get('[type="submit"]').click()

    // Verifying that correct path was opened and the page is rendered (has visible unique element)
    cy.location('pathname').should('include', 'profile')
    cy.get('.ant-avatar-square').should('be.visible')
  })

  it('Log in with valid email and invalid password', () => {
    // Navigating to the login path
    cy.visit('/user/login')

    // Typing in valid login and invalid password, clicking 'Log in' button
    cy.get('#normal_login_email').type('palenov@gmail.com')
    cy.get('#normal_login_password').type('Test123')
    cy.get('[type="submit"]').click()

    // Verifying that alert message 'Auth failed' pops up on the login page
    cy.location('pathname').should('include', 'login')
    cy.get('.ant-notification-notice-message').should('have.text', 'Auth failed').should('be.visible')
  })

  it('Log in with invalid email and password', () => {
    // Navigating to the login page
    cy.visit('/user/login')

    // Typing in invalid login and password, clicking 'Log in' button
    cy.get('#normal_login_email').type('pabcdef@ghijkl.com')
    cy.get('#normal_login_password').type('W#4912Afm@')
    cy.get('[type="submit"]').click()

    // Verifying that alert message 'Auth failed' pops up on the login page
    cy.location('pathname').should('include', 'login')
    cy.get('.ant-notification-notice-message').should('have.text', 'Auth failed').should('be.visible')
  })

  it.only ('Typing invalidly formatted email', () => {
    // Navigating to the login page
    cy.visit('/user/login')

    // Typing in invalidly formatted email
    cy.get('#normal_login_email').type('pa.bcdef@ghicom')

    // Verifying that "'email' is not a valid email" error message is displayed under the email field
    //cy.contains('\'email\' is not a valid email').

  })
})