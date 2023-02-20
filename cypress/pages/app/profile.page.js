
import AppPage from './app.page'

class ProfilePage extends AppPage {
  open() {
    return super.open(`/profile/${Cypress.env('userId')}`)
  }
}

export default new ProfilePage()