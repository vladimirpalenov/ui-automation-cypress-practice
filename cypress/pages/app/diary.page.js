import AppPage from './app.page'

class DiaryPage extends AppPage {
  get header() {
    return cy.contains('Daily reports')
  }
  open() {
    return super.open('/diary')
  }
}

export default new DiaryPage()
