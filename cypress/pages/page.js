export default class Page {
  get path() {
    return cy.location('pathname')
  }
  open(path) {
    return cy.visit(path)
  }
}
