import { match } from 'ts-pattern'
import { Input, InputToken } from './types'

const prettifyToken = (token: InputToken) => {
  return match(token)
    .with({ kind: 'numeric' }, (numeric) => numeric.value)
    .with({ kind: 'non-numeric' }, (nonNumeric) => {
      return match(nonNumeric.value)
        .with('(', () => ' (')
        .with(')', () => ') ')
        .otherwise((operator) => ` ${operator} `)
    })
    .exhaustive()
}

const prettifyExpression = (expression: Input): string => {
  return expression.map(prettifyToken).join('').replace(/\s\s/g, ' ')
}

export default prettifyExpression
