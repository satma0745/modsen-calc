import { match } from 'ts-pattern'

import { Expression, ExpressionToken } from './types'

const validatePair = (left: ExpressionToken, right: ExpressionToken) => {
  return match(left)
    .with({ kind: 'literal' }, () => right.kind !== 'literal')
    .with({ kind: 'operator' }, () => right.kind === 'literal' || (right.kind === 'bracket' && right.open))
    .with({ kind: 'bracket', open: true }, () => right.kind === 'literal' || (right.kind === 'bracket' && right.open))
    .with(
      { kind: 'bracket', open: false },
      () => right.kind === 'operator' || (right.kind === 'bracket' && !right.open),
    )
    .exhaustive()
}

const validateBrackets = (expression: Expression) =>
  expression.reduce(
    (depth, token) =>
      match(token)
        .with({ kind: 'bracket', open: true }, () => depth + 1)
        .with({ kind: 'bracket', open: false }, () => depth - 1)
        .otherwise(() => depth),
    0,
  ) === 0

const validate = (expression: Expression): boolean => {
  const validBrackets = validateBrackets(expression)
  if (!validBrackets) {
    return false
  }

  for (let index = 1; index < expression.length; index += 1) {
    const left = expression[index - 1]
    const right = expression[index]

    const isValidPair = validatePair(left, right)
    if (!isValidPair) {
      return false
    }
  }

  return true
}

export default validate
