describe('test theming', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/settings')
  })

  it('theme switch', () => {
    cy.get('[data-testid="theme-select"]').select('light')
    cy.get('[data-testid="page"]').should('have.css', 'background-color').and('eq', 'rgb(255, 255, 255)')

    cy.get('[data-testid="theme-select"]').select('dark')
    cy.get('[data-testid="page"]').should('have.css', 'background-color').and('eq', 'rgb(45, 45, 45)')
  })
})
