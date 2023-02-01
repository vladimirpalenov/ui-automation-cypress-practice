import AppPage from './app.page'

class CoursesPage extends AppPage {
  get header() {
    return cy.contains('Interactive Courses')
  }
  open() {
    return super.open('/course')
  }
}

export default new CoursesPage()
