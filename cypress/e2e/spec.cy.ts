// ---------- CYPRESS EXAMPLES ----------
// ---------- Cypress example ----------
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

// ---------- Cypress example ----------
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})

describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})