import { useCallback, useState } from 'react'

import calculate from '@core/calculator'
import { prettify } from '@core/input'

import { addRecord } from '@redux/reducers/history'
import { addNumeric, clearAll } from '@redux/reducers/input'
import { useDispatch, useInputSelector } from '@redux/hooks'

interface ReturnType {
  isError: boolean
  onEquals: () => void
  resetError: () => void
}

const useCalculator = (): ReturnType => {
  const [isError, setIsError] = useState(false)

  const dispatch = useDispatch()
  const inputs = useInputSelector()

  const onEquals = useCallback(() => {
    const answer = calculate(inputs).toString()
    setIsError(answer === 'Error')

    const expression = prettify(inputs)
    const record = `${expression} = ${answer}`
    dispatch(addRecord(record))

    dispatch(clearAll())
    if (answer !== 'Error') {
      dispatch(addNumeric(answer))
    }
  }, [inputs, setIsError])

  const resetError = useCallback(() => {
    setIsError(false)
  }, [setIsError])

  return { isError, onEquals, resetError }
}

export default useCalculator
