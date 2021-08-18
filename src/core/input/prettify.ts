import { match } from 'ts-pattern'
import { Input, InputToken } from './types'

const prettifyToken = (token: InputToken) => {
  return match(token)
    .with({ kind: 'numeric' }, (numeric) => numeric.value)
    .with({ kind: 'non-numeric' }, (nonNumeric) => {
      return match(nonNumeric.value)
        .with('(', () => ' (')
        .with(')', () => ') ')
        .with('+', '-', '*', '/', (operator) => ` ${operator} `)
        .otherwise((value) => value)
    })
    .exhaustive()
}

const prettifyExpression = (expression: Input): string => {
  return expression.map(prettifyToken).join('')
}

export default prettifyExpression
