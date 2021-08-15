import { useCallback, useEffect, useState } from 'react'
import { push, subscribe, handler } from '@core/inputs'

interface ReturnType {
  (_: string): void
}

interface Calculate {
  (_: string[]): number | false
}

const answerToInput = (answer: number) => {
  return (answer >= 0 ? answer.toString() : `0-${Math.abs(answer)}`).split('')
}

const useKeypad = (calculate: Calculate): ReturnType => {
  const [inputs, setInputs] = useState<string[]>([])
  useEffect(() => subscribe(setInputs), [setInputs])

  const onEquals = useCallback(() => {
    return calculate([...inputs])
  }, [inputs])

  const onAnswer = useCallback((answer: number) => {
    answerToInput(answer).forEach(push)
  }, [])

  const handleInput = useCallback(handler(onEquals, onAnswer), [onEquals, onAnswer])
  return handleInput
}

export default useKeypad
