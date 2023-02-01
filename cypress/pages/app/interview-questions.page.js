import AppPage from './app.page'

class InterviewQuestionsPage extends AppPage {
  get header() {
    return cy.contains('Interview practice cards')
  }
  open() {
    return super.open('/flash')
  }
}

export default new InterviewQuestionsPage()
