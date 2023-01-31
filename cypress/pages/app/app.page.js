import Page from "../page";

export default class AppPage extends Page{

 get linkCources (){
     return cy.get('[data-qa="topmenu-Courses"]')
 }
 get linkInterviewQuestions (){
        return cy.get('[data-qa="topmenu-Interview Questions"]')
 }

 get linkDiary (){
        return cy.get('[data-qa="topmenu-Diary"]')
 }

 get linkGroups (){
        return cy.get('[data-qa="topmenu-Groups"]')
 }

 get linkChallenges (){
        return cy.get('[data-qa="topmenu-Challenges"]')
 }

 get linkGoals (){
        return cy.get('[data-qa="topmenu-Goals"]')
 }

 get linkHomeLogo (){
        return cy.get('.text-nowrap')
 }
}