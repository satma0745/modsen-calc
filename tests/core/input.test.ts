import { prettify } from '@core/input'
import { parseExpression } from '@tests/shared'

it('correct prettify algorithm', () => {
  const input = [2, '*', '(', 11, '+', 4, ')', '/', 6]
  const expression = parseExpression(input)
  const pretty = prettify(expression)

  expect(pretty).toBe('2 * (11 + 4) / 6')
})
