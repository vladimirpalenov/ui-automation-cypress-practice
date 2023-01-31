import MainPage from '../pages/app/main.page'

describe('Navigation', () => {
  //Hook to navigate to the login page, enter valid login, password, and click "Log in" button
  beforeEach(() => {
    // Login with valid login and password
    cy.login(Cypress.env('email'), Cypress.env('password'))
    MainPage.open()
  })

  it('Courses link opens courses page', () => {
    // Click on 'Cources' link
    MainPage.linkCources.click()

    // Verifying correct path and correct elements are visible on 'Courses' page
    cy.location('pathname').should('include', '/course')
    cy.contains('Interactive Courses').should('be.visible')
  })

  it('Interview Questions link opens correct page', () => {
    // Click on 'Interview Questions' link
    MainPage.linkInterviewQuestions.click()

    // Verifying correct path and correct elements are visible on 'Interview Questions' page
    cy.location('pathname').should('include', '/flash')
    cy.contains('Interview practice cards').should('be.visible')
  })

  it('Diary link opens dairy page', () => {
    // Click on 'Diary' link
    MainPage.linkDiary.click()

    // Verifying correct path and correct elements are visible on 'Diary' page
    cy.location('pathname').should('include', '/diary')
    cy.contains('Daily reports').should('be.visible')
  })

  it('Groups link opens groups page', () => {
    // Click on 'Groups' link
    MainPage.linkGroups.click()

    // Verifying correct path and correct elements are visible on 'Groups' page
    cy.location('pathname').should('include', '/group')
    cy.contains('Groups').should('be.visible')
  })

  it('Challenges link opens challenges page', () => {
    // Click on 'Challenges' link
    MainPage.linkChallenges.click()

    // Verifying correct path and correct elements are visible on 'Challenges' page
    cy.location('pathname').should('include', '/challenge')
    cy.contains('Challenges').should('be.visible')
  })

  it('Goals link opens goals page', () => {
    // Click on 'Goals' link
    MainPage.linkGoals.click()

    // Verifying correct path and correct elements are visible on 'Goals' page
    cy.location('pathname').should('include', '/goal')
    cy.contains('Goals').should('be.visible')
  })

  it('Local coding home logo redirects to homepage', () => {
    // Click on Local coding home logo
    MainPage.linkHomeLogo.click()

    // Verifying that user was redirected to the home page and page content is visible
    cy.location(`pathname`).should(`eq`, `/`)
    cy.contains('Interactive learning').should('be.visible')
  })
})
