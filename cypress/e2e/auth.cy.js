import AuthPage from '../pages/auth.page'

describe('Authentification', () => {
  // Hook to navigate to the login page before each test
  beforeEach(() => {
    // Navigating to the login page
    AuthPage.open()
  })

  it('Log in with valid credentials', () => {
    // Logging in with valid email and password
    AuthPage.logIn(Cypress.env('email'), Cypress.env('password'))
    // Verifying that correct path was opened and the page is rendered (has visible unique element)
    cy.location('pathname').should('include', 'profile')
    cy.get('.ant-avatar-square').should('be.visible')
  })

  it('Log in with valid email and invalid password', () => {
    // Logging in with valid email and invalid password
    AuthPage.logIn(Cypress.env('email'), 'Test123')
    // Verifying that alert message 'Auth failed' pops up on the login page
    cy.location('pathname').should('include', 'login')
    cy.get('.ant-notification-notice-message')
      .should('have.text', 'Auth failed')
      .should('be.visible')
  })

  it('Log in with invalid email and password', () => {
    // Typing in invalid login and password, clicking 'Log in' button
    AuthPage.logIn('pabcdef@ghijkl.com', 'W#4912Afm@')
    // Verifying that alert message 'Auth failed' pops up on the login page
    cy.location('pathname').should('include', 'login')
    AuthPage.toast.should('have.text', 'Auth failed').should('be.visible')
  })

  it('Typing invalidly formatted email', () => {
    // Typing in invalidly formatted email
    cy.get('#normal_login_email').type('pa.bcdef@ghicom')

    // Verifying that "'email' is not a valid email" error message is displayed under the email field
    cy.contains("'email' is not a valid email").should('be.visible')

    // Verifying that clearing the data typed in email input field results in 'Required' error message displayed under the email field
    cy.get('#normal_login_email').clear()

    // Typing in password and clearing it
    cy.get('#normal_login_password').type('tEsT123@').clear()

    // Verifying that clearing data in email & password input fields results in 'Required' error message displayed under the input fields
    cy.get('[class="ant-form-item-explain-error"]').each(error => {
      cy.wrap(error).should('have.text', 'Required').should('be.visible')
    })
  })
})
