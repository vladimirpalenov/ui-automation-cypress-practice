describe('empty spec', () => {
  it('passes', () => {
    // Navigating to the login path
    cy.visit('/user/login')

    // Typing in ligin, password and clicking 'Log in' button
    cy.get('#normal_login_email').type('palenov@gmail.com')
    cy.get('#normal_login_password').type('Sergey9659')
    cy.get('[type="submit"]').click()

    // Checking that correct path was opened and the page is rendered (has visible unique element)
    cy.location('pathname').should('include', 'profile')
    cy.get('.ant-avatar-square').should('be.visible')
  })
})