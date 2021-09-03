const getButton = (label: string) => cy.get('[data-testid="keypad"] > button').contains(label)
const getDisplay = () => cy.get('[data-testid="display"]')
const getHistory = () => cy.get('[data-testid="history"]')

describe('test calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('2 + 2 = 4', () => {
    getButton('2').click()
    getButton('+').click()
    getButton('2').click()
    getButton('=').click()

    getDisplay().should('contain', '4')
    getHistory().should('contain', '2 + 2 = 4')
  })

  it('(2 + 2 * 2) / 2 = 3', () => {
    getButton('(').click()
    getButton('2').click()
    getButton('+').click()
    getButton('2').click()
    getButton('*').click()
    getButton('2').click()
    getButton(')').click()
    getButton('/').click()
    getButton('2').click()
    getButton('=').click()

    getDisplay().should('contain', '3')
    getHistory().should('contain', '(2 + 2 * 2) / 2 = 3')
  })
})
