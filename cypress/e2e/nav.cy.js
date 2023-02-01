import MainPage from '../pages/app/main.page'
import CoursesPage from '../pages/app/courses.page'
import InterviewQuestionsPage from '../pages/app/interview-questions.page'

describe('Navigation', () => {
  //Hook to navigate to the login page, enter valid login, password, and click "Log in" button
  beforeEach(() => {
    // Login with valid login and password
    cy.login(Cypress.env('email'), Cypress.env('password'))
    MainPage.open()
  })

  it('Courses link opens courses page', () => {
    // Click on 'Courses' link
    MainPage.navbar.linkCourses.click()

    // Verifying correct path and correct elements are visible on 'Courses' page
    CoursesPage.path.should('include', '/course')
    CoursesPage.header.should('be.visible')
  })

  it('Interview Questions link opens correct page', () => {
    // Click on 'Interview Questions' link
    MainPage.navbar.linkInterviewQuestions.click()

    // Verifying correct path and correct elements are visible on 'Interview Questions' page
    InterviewQuestionsPage.path.should('include', '/flash')
    InterviewQuestionsPage.header.should('be.visible')
  })

  it('Diary link opens dairy page', () => {
    // Click on 'Diary' link
    MainPage.navbar.linkDiary.click()

    // Verifying correct path and correct elements are visible on 'Diary' page
    cy.location('pathname').should('include', '/diary')
    cy.contains('Daily reports').should('be.visible')
  })

  it('Groups link opens groups page', () => {
    // Click on 'Groups' link
    MainPage.navbar.linkGroups.click()

    // Verifying correct path and correct elements are visible on 'Groups' page
    cy.location('pathname').should('include', '/group')
    cy.contains('Groups').should('be.visible')
  })

  it('Challenges link opens challenges page', () => {
    // Click on 'Challenges' link
    MainPage.navbar.linkChallenges.click()

    // Verifying correct path and correct elements are visible on 'Challenges' page
    cy.location('pathname').should('include', '/challenge')
    cy.contains('Challenges').should('be.visible')
  })

  it('Goals link opens goals page', () => {
    // Click on 'Goals' link
    MainPage.navbar.linkGoals.click()

    // Verifying correct path and correct elements are visible on 'Goals' page
    cy.location('pathname').should('include', '/goal')
    cy.contains('Goals').should('be.visible')
  })

  it('Local coding home logo redirects to homepage', () => {
    // Click on Local coding home logo
    MainPage.navbar.linkHomeLogo.click()

    // Verifying that user was redirected to the home page and page content is visible
    cy.location(`pathname`).should(`eq`, `/`)
    cy.contains('Interactive learning').should('be.visible')
  })
})
