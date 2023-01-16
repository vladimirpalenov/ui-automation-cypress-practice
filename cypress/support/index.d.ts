declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Log in to the application with given email and password
     * @example
     * cy.login('email@example.com', 'password')
     */
    login(email: string, password: string): void
  }
}
