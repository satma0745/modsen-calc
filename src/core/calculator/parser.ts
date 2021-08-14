import { match } from 'ts-pattern'
import { Bracket, Expression, Literal, Operator, OperatorKind } from './types'

const isNumber = (candidate: string) => {
  return candidate.length === 0 ? false : !isNaN(Number(candidate))
}

const add: Operator = { kind: 'operator', operator: '+', priority: 0 }
const subtract: Operator = { kind: 'operator', operator: '-', priority: 0 }
const multiply: Operator = { kind: 'operator', operator: '*', priority: 1 }
const divide: Operator = { kind: 'operator', operator: '/', priority: 1 }

const parseOperator = (operator: OperatorKind): Operator => {
  return match(operator)
    .with('+', () => add)
    .with('-', () => subtract)
    .with('*', () => multiply)
    .with('/', () => divide)
    .exhaustive()
}

const parseExpressionToken = (token: string) => {
  return match(token)
    .with('+', '-', '*', '/', (operatorToken) => parseOperator(operatorToken))
    .with('(', (): Bracket => ({ kind: 'bracket', open: true }))
    .with(')', (): Bracket => ({ kind: 'bracket', open: false }))
    .otherwise((input): Literal => {
      if (isNumber(input)) {
        return { kind: 'literal', value: Number(input) }
      }

      throw new Error(`Unsupported token "${token}"`)
    })
}

const parse = (expression: string[]): Expression => {
  return expression.map(parseExpressionToken)
}

export default parse
