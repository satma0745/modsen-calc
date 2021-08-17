import { match } from 'ts-pattern'

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
