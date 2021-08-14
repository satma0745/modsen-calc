type OperatorKind = '+' | '-' | '*' | '/'
type OperatorPriority = 0 | 1
type Operator = {
  kind: 'operator'
  operator: OperatorKind
  priority: OperatorPriority
}

type Bracket = {
  kind: 'bracket'
  open: boolean
}

type Literal = {
  kind: 'literal'
  value: number
}

type ExpressionToken = Operator | Bracket | Literal
type Expression = ExpressionToken[]

export { OperatorKind, OperatorPriority, Operator, Bracket, Literal, ExpressionToken, Expression }
