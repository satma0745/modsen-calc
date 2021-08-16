import { clear, pop, push } from './inputs'
import { match } from 'ts-pattern'

interface OnEquals {
  (): number | false
}

interface OnInput {
  (_: string): void
}

const answerToInput = (answer: number) => {
  return (answer >= 0 ? answer.toString() : `0-${Math.abs(answer)}`).split('')
}

const handle = (input: string, onEquals: OnEquals) => {
  match(input)
    .with('C', () => clear())
    .with('CE', () => pop())
    .with('=', () => {
      const result = onEquals()
      clear()

      if (result !== false) {
        answerToInput(result).forEach(push)
      }
    })
    .otherwise(() => push(input))
}

const makeHandle = (onEquals: OnEquals): OnInput => {
  return (input: string): void => handle(input, onEquals)
}

export default makeHandle
