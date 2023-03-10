class Navbar {
  get linkCourses() {
    return cy.get('[data-qa="topmenu-Courses"]')
  }
  get linkInterviewQuestions() {
    return cy.get('[data-qa="topmenu-Interview Questions"]')
  }

  get linkDiary() {
    return cy.get('[data-qa="topmenu-Diary"]')
  }

  get linkGroups() {
    return cy.get('[data-qa="topmenu-Groups"]')
  }

  get linkChallenges() {
    return cy.get('[data-qa="topmenu-Challenges"]')
  }

  get linkGoals() {
    return cy.get('[data-qa="topmenu-Goals"]')
  }

  get linkHomeLogo() {
    return cy.get('.text-nowrap')
  }
}

export default new Navbar()
