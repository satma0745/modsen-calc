describe('test navigation', () => {
  it('navigate pages', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="calculator"]').should('exist')

    cy.visit('http://localhost:3000/class')
    cy.get('[data-testid="calculator"]').should('exist')

    cy.visit('http://localhost:3000/settings')
    cy.get('[data-testid="settings"]').should('exist')
  })
})
