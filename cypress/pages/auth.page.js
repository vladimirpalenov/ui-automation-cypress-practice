import Page from './page'

class AuthPage extends Page {

  get inputEmail() {
    return cy.get('#normal_login_email')
  }
  get inputPassword() {
    return cy.get('#normal_login_password')
  }
  get buttonLogIn() {
    return cy.get('[type="submit"]')
  }
  get toast() {
      return cy.get('.ant-notification-notice-message')
  }

  open() {
    return super.open('/user/login')
  }

  logIn (email, password){
      this.inputEmail.type(email)
      this.inputPassword.type(password)
      this.buttonLogIn.click()
  }
}

export default new AuthPage()