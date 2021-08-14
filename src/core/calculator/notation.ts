import { Expression, Literal, Operator } from './types'
import { match } from 'ts-pattern'

// Algorithm used to convert infix-notation expression to the postfix one:
//
// Prelude: expression is enclosed in parentheses
//
// There are 2 data structures:
//   a) Resulting list - contains the resulting expression
//   b) Transition stack - contains transition operators and parentheses
//
// Numeric literals immediately go to the resulting list.
//
// All operators and parentheses go to the transition stack first.
//
// An operator can go to the resulting list only if:
//   a) it is preempted to the resulting list by an operator with the same or lower priority
//   b) or when the parentheses collapse
// In both cases the order of operators reverses.
//
// The parentheses are removed from the stack on collapse: when a closing parenthesis is added to the stack,
// all operators between it and the last opening parenthesis are moved to the resulting stack (in reverse order),
// and a pair of parentheses are removed.
//
// Example: (A - B + C * D) / E + F * G  --> A B - C D * + E / F G * +
// | --------- | ---------- | --------------------- | ------------------------------------------------------- |
// | New token | Transition |       Resulting       |                         Comment                         |
// | --------- | ---------- | --------------------- | ------------------------------------------------------- |
// |     (     | (          |                       |                                                         |
// |     (     | ( (        |                       |                                                         |
// |     A     | ( (        | A                     |                                                         |
// |     -     | ( ( -      | A                     |                                                         |
// |     B     | ( ( -      | A B                   |                                                         |
// |     +     | ( ( +      | A B -                 | "+" operator has the same priority as the "-" operator  |
// |     C     | ( ( +      | A B - C               |                                                         |
// |     *     | ( ( + *    | A B - C               |                                                         |
// |     D     | ( ( + *    | A B - C D             |                                                         |
// |     )     | (          | A B - C D * +         | parentheses collapsed                                   |
// |     /     | ( /        | A B - C D * +         |                                                         |
// |     E     | ( /        | A B - C D * + E       |                                                         |
// |     +     | ( +        | A B - C D * + E /     | "+" operator has lower priority than the "/" operator   |
// |     F     | ( +        | A B - C D * + / F     |                                                         |
// |     *     | ( + *      | A B - C D * + / F     |                                                         |
// |     G     | ( + *      | A B - C D * + / F G   |                                                         |
// |     )     |            | A B - C D * + / F * + | parentheses collapsed                                   |
// | --------- | ---------- | --------------------- | ------------------------------------------------------- |

const enclose = (expression: Expression): Expression => {
  return [{ kind: 'bracket', open: true }, ...expression, { kind: 'bracket', open: false }]
}

type PostfixExpressionToken = Operator | Literal
type PostfixExpression = PostfixExpressionToken[]

const toPostfix = (expression: Expression): PostfixExpression => {
  const resulting: PostfixExpression = []
  const transition: Expression = []

  for (const expressionToken of enclose(expression)) {
    match(expressionToken)
      .with({ kind: 'literal' }, (literal) => resulting.push(literal))
      .with({ kind: 'bracket', open: true }, (bracket) => transition.push(bracket))
      .with({ kind: 'bracket', open: false }, () => {
        let token = transition.pop()!
        while (!(token.kind === 'bracket' && token.open)) {
          resulting.push(token as PostfixExpressionToken)
          token = transition.pop()!
        }
      })
      .with({ kind: 'operator' }, (operator) => {
        let token = transition.pop()
        while (token !== undefined) {
          if (token.kind === 'operator' && token.priority >= operator.priority) {
            resulting.push(token)
            token = transition.pop()
          } else {
            transition.push(token)
            token = undefined
          }
        }

        transition.push(operator)
      })
      .exhaustive()
  }

  return resulting
}

export default toPostfix
export { PostfixExpression, PostfixExpressionToken }
