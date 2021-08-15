import { useCallback } from 'react'

import calculate from '@core/calculator'

import useDisplay from './useDisplay'
import useHistory from './useHistory'
import useKeypad from './useKeypad'

interface ReturnType {
  display: string
  history: string[]
  handleInput: (_: string) => void
}

const useCalculator = (): ReturnType => {
  const display = useDisplay()
  const history = useHistory()

  const onEquals = useCallback(
    (inputs) => {
      const calculated = calculate(inputs)
      const answer = calculated === false ? 'Error' : calculated.toString()

      history.push(inputs, answer)

      return calculated
    },
    [history.push],
  )
  const handleInput = useKeypad(onEquals)

  return { display: display.value, history: history.value, handleInput }
}

export default useCalculator
