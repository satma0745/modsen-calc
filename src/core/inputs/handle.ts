import { clear, pop, push } from './inputs'
import { match } from 'ts-pattern'

interface OnEquals {
  (): number | false
}

interface OnAnswer {
  (_: number): void
}

interface OnInput {
  (_: string): void
}

const handle = (input: string, onEquals: OnEquals, onAnswer: OnAnswer) => {
  match(input)
    .with('C', () => clear())
    .with('CE', () => pop())
    .with('=', () => {
      const result = onEquals()
      clear()

      if (result !== false) {
        onAnswer(result)
      }
    })
    .otherwise(() => push(input))
}

const makeHandle = (onEquals: OnEquals, onAnswer: OnAnswer): OnInput => {
  return (input: string): void => handle(input, onEquals, onAnswer)
}

export default makeHandle
