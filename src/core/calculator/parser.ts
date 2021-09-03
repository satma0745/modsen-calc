import { match } from 'ts-pattern'
import { Input, InputToken } from '@core/input'
import { Bracket, Expression, Literal, Operator, OperatorKind, OperatorPriority } from './types'

const parseNumeric = (token: InputToken): Literal => {
  const value = Number(token.value)
  return { kind: 'literal', value }
}

const operator = (operator: OperatorKind, priority: OperatorPriority): Operator => ({
  kind: 'operator',
  operator,
  priority,
})
const bracket = (kind: 'open' | 'close'): Bracket => ({ kind: 'bracket', open: kind === 'open' })

const parseNonNumeric = (token: InputToken): Operator | Bracket => {
  return match(token.value)
    .with('(', () => bracket('open'))
    .with(')', () => bracket('close'))
    .with('+', '-', (op) => operator(op, 0))
    .with('*', '/', '%', (op) => operator(op, 1))
    .otherwise((value) => {
      throw new Error(`Unsupported non-numeric token "${value}"`)
    })
}

const parseExpressionToken = (token: InputToken) => {
  return match(token)
    .with({ kind: 'numeric' }, parseNumeric)
    .with({ kind: 'non-numeric' }, parseNonNumeric)
    .exhaustive()
}

const parse = (expression: Input): Expression => {
  return expression.map(parseExpressionToken)
}

export default parse
