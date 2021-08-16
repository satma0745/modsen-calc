import { match } from 'ts-pattern'

// Pretty expression rules:
//  - indented brackets (before opening and after closing)
//  - indented operators (before and after each operator)

const prettifyToken = (input: string) => {
  return match(input)
    .with('(', () => ' (')
    .with(')', () => ') ')
    .with('+', '-', '*', '/', (operator) => ` ${operator} `)
    .otherwise((token) => token)
}

const prettifyExpression = (expression: string[]): string => {
  return expression.map(prettifyToken).join('')
}

export default prettifyExpression
