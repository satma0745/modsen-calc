import { useCallback } from 'react'

import useDisplay from './useDisplay'
import useHistory from './useHistory'
import useKeypad from './useKeypad'

interface ReturnType {
  display: string
  history: string[]
  handleInput: (input: string) => void
}

const useCalculator = (): ReturnType => {
  const display = useDisplay()
  const history = useHistory()

  const onEquals = useCallback((inputs) => history.push(inputs, '<Answer>'), [display, history.push])
  const handleInput = useKeypad(onEquals)

  return { display, history: history.value, handleInput }
}

export default useCalculator
