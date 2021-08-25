import { Input, InputToken } from '@core/input'

const parseExpression = (input: (string | number)[]): Input => {
  return input.map(
    (token): InputToken => ({
      kind: typeof token === 'string' ? 'non-numeric' : 'numeric',
      value: token.toString(),
    }),
  )
}

export default parseExpression
