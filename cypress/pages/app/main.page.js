import AppPage from './app.page'

class MainPage extends AppPage {
  open() {
    return super.open('/')
  }
}

export default new MainPage()
