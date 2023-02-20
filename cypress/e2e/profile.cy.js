import ProfilePage from '../pages/app/profile.page'

describe('Profile', () => {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.intercept(
        '/course/coursesProgress/*',
        {
          statusCode: 200,
          body: {
            'message': 'Get courses progress',
            'success': true,
            'fail': false,
            'payload': [
              {
                '_id': '630cd20f2acb6cf334081c0f',
                'completedLessons': 17,
                'totalLessons': 17,
                'course': {
                  '_id': '6257846e1224311e20f842e9',
                  'name': 'JS2 Module',
                },
              },
            ],
          },
        },
    )
  })

  it('Course appears in Course progress section', () => {
    ProfilePage.open()
    cy.contains('JS2 Module').should('be.visible')
  })
})
