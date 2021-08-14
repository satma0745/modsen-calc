import { useCallback, useEffect, useState } from 'react'
import { push, pop, clear, subscribe } from '@core/inputs'

interface ReturnType {
  (_: string): void
}

interface OnEquals {
  (_: string[]): number | false
}

const answerToInput = (answer: number) => {
  return (answer >= 0 ? answer.toString() : `0-${Math.abs(answer)}`).split('')
}

const useKeypad = (onEquals: OnEquals): ReturnType => {
  const [inputs, setInputs] = useState<string[]>([])
  useEffect(() => subscribe(setInputs), [setInputs])

  const handleInput = useCallback(
    (input) => {
      switch (input) {
        case '=':
          const answer = onEquals([...inputs])

          clear()

          if (answer !== false) {
            answerToInput(answer).forEach(push)
          }

          break
        case 'C':
          clear()
          break
        case 'CE':
          pop()
          break
        default:
          push(input)
      }
    },
    [inputs],
  )

  return handleInput
}

export default useKeypad
