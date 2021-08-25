import calculate from '@core/calculator'
import { parseExpression } from '../shared'

const calc = (input: (string | number)[], answer: number | 'Error') => {
  const expression = parseExpression(input)
  expect(calculate(expression)).toBe(answer)
}

it('handles basic operations', () => {
  calc([8, '+', 2], 10)
  calc([8, '-', 2], 6)
  calc([8, '*', 2], 16)
  calc([8, '/', 2], 4)
  calc([8, '%', 2], 0)
})

it('handles fractional values', () => {
  calc([1.5, '+', 0.2], 1.7)
})

it('handles negative values', () => {
  calc([2, '-', 3], -1)
})

it('respects operator priorities', () => {
  calc([2, '+', 2, '*', 2], 6)
  calc([2, '-', 2, '/', 2], 1)
})

it('respects brackets priorities', () => {
  calc(['(', 2, '+', 2, ')', '*', 2], 8)
  calc(['(', 2, '-', 2, ')', '/', 2], 0)
})

it('handles errors', () => {
  calc([2, '/', 0], 'Error')
  calc([2, '/', '/', 1], 'Error')
  calc(['(', 2, '-', 2], 'Error')
})
