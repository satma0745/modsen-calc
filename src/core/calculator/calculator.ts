import { match } from 'ts-pattern'

import { PostfixExpression } from './notation'
import { Operator } from './types'

const performOperation = (operator: Operator, left: number, right: number): number => {
  return match(operator)
    .with({ operator: '+' }, () => left + right)
    .with({ operator: '-' }, () => left - right)
    .with({ operator: '*' }, () => left * right)
    .with({ operator: '/' }, () => left / right)
    .exhaustive()
}

const calculate = (expression: PostfixExpression): number => {
  const stack: number[] = []

  for (const token of expression) {
    match(token)
      .with({ kind: 'literal' }, (literal) => stack.push(literal.value))
      .with({ kind: 'operator' }, (operator) => {
        const right = stack.pop()
        const left = stack.pop()

        const result = performOperation(operator, left!, right!)
        stack.push(result)
      })
      .exhaustive()
  }

  const answer = stack.pop()
  return answer!
}

export default calculate
