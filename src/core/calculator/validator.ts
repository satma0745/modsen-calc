import { Expression, ExpressionToken } from './types'
import { match } from 'ts-pattern'

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

const validate = (expression: Expression): boolean => {
  for (let index = 1; index < expression.length; index += 1) {
    const left = expression[index - 1]
    const right = expression[index]

    const isValid = validatePair(left, right)
    if (!isValid) {
      return false
    }
  }

  return true
}

export default validate
