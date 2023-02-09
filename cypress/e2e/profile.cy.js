import ProfilePage from '../pages/app/profile.page'

describe('Profile', () => {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
  })

  it('Course appears in the Course progress section', () => {
    ProfilePage.open()
  })
})
