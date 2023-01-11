describe('Navigation', () => {
  //Hook to navigate to the login page, enter valid login, password, and click "Log in" button
  beforeEach(() => {
    // Navigating to the login page
    cy.visit('/user/login')

    // Typing in valid login and password, clicking 'Log in' button
    cy.get('#normal_login_email').type('palenov@gmail.com')
    cy.get('#normal_login_password').type('Sergey9659')
    cy.get('[type="submit"]').click()
  })

  it('Courses link opens courses page', () => {
    // Click on 'Cources' link
    cy.get('[data-qa="topmenu-Courses"]').click()

    // Verifying correct path and correct elements are visible on 'Courses' page
    cy.location('pathname').should('include', '/course')
    cy.contains('Interactive Courses').should('be.visible')
  })

  it('Interview Questions link opens correct page', () => {
    // Click on 'Interview Questions' link
    cy.get('[data-qa="topmenu-Interview Questions"]').click()

    // Verifying correct path and correct elements are visible on 'Interview Questions' page
    cy.location('pathname').should('include', '/flash')
    cy.contains('Interview practice cards').should('be.visible')
  })

  it('Diary link opens dairy page', () => {
    // Click on 'Diary' link
    cy.get('[data-qa="topmenu-Diary"]').click()

    // Verifying correct path and correct elements are visible on 'Diary' page
    cy.location('pathname').should('include', '/diary')
    cy.contains('Daily reports').should('be.visible')
  })

  it('Groups link opens groups page', () => {
    // Click on 'Groups' link
    cy.get('[data-qa="topmenu-Groups"]').click()

    // Verifying correct path and correct elements are visible on 'Groups' page
    cy.location('pathname').should('include', '/group')
    cy.contains('Groups').should('be.visible')
  })

  it('Challenges link opens challenges page', () => {
    // Click on 'Challenges' link
    cy.get('[data-qa="topmenu-Challenges"]').click()

    // Verifying correct path and correct elements are visible on 'Challenges' page
    cy.location('pathname').should('include', '/challenge')
    cy.contains('Challenges').should('be.visible')
  })

  it('Goals link opens goals page', () => {
    // Click on 'Goals' link
    cy.get('[data-qa="topmenu-Goals"]').click()

    // Verifying correct path and correct elements are visible on 'Goals' page
    cy.location('pathname').should('include', '/goal')
    cy.contains('Goals').should('be.visible')
  })

  it('Local coding home logo redirects to homepage', () => {
    // Click on Local coding home logo
    cy.get('.text-nowrap').click()

    // Verifying that user was redirected to the home page and page content is visible
    cy.location(`pathname`).should(`eq`, `/`)
    cy.contains('Interactive learning').should('be.visible')
  })
})
