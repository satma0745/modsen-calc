import { prettify } from '@core/input'
import parseExpression from './expression'

it('correct prettify algorithm', () => {
  const input = [2, '*', '(', 11, '+', 4, ')', '/', 6]
  const expression = parseExpression(input)
  const pretty = prettify(expression)

  // currently application failing this test
  expect(pretty).toBe('2 * (11 + 4) / 6')
})
