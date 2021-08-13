import { useCallback, useEffect, useState } from 'react'
import { push, pop, clear, subscribe } from '@core/inputs'

interface ReturnType {
  (input: string): void
}

const useKeypad = (onEquals: (inputs: string[]) => void): ReturnType => {
  const [inputs, setInputs] = useState<string[]>([])
  useEffect(() => subscribe(setInputs), [setInputs])

  const handleInput = useCallback(
    (input) => {
      switch (input) {
        case '=':
          onEquals([...inputs])
          clear()
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
