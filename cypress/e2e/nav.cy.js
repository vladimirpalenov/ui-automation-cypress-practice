describe('Navigation', () => {
    it ('Courses link opens courses page', () => {
        // Navigating to the login page
        cy.visit('/user/login')

        // Typing in valid login and password, clicking 'Log in' button
        cy.get('#normal_login_email').type('palenov@gmail.com')
        cy.get('#normal_login_password').type('Sergey9659')
        cy.get('[type="submit"]').click()

        // Click on 'Cources' link
        cy.get(['data-qa="topmenu-Courses"']).click()

        // Verifying correct path and correct elements are visible on 'Courses' page
        cy.location('pathname').should('include', '/course')
        cy.contains('Interactive Courses').should('be.visible')
    })
})