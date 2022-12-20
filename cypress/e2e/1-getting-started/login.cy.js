/// <reference types="cypress" />

const cypressConfig = require("../../../cypress.config")

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})

describe('Login user', () => {
  beforeEach(() => {
    cy.viewport(1392, 768)
    cy.visit('https://codingid.online')

  })

  it('Login as user', () => {
    cy.get('a[href*="/login"]').first().click()
    cy.get('#buttonLoginTrack').should('have.text', '\n                                                        Login\n                                                    ')
    
    const userName = 'testverifiedqa@gmail.com'
    const password = 'Codingsss'

    cy.get('#email').type(`${userName}`)
    cy.get('#password').type(`${password}`).type('{enter}')


    

  })

})
