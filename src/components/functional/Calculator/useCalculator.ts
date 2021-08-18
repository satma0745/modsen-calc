import { useCallback, useState } from 'react'
import { __, match } from 'ts-pattern'

import calculate from '@core/calculator'
import { prettify } from '@core/input'

import { add } from '@redux/reducers/history'
import { addNumeric, clearAll } from '@redux/reducers/input'
import { useDispatch, useInputsSelector } from '@redux/hooks'

interface ReturnType {
  answer: string | undefined
  onEquals: () => void
}

const useCalculator = (): ReturnType => {
  const [answer, setAnswer] = useState<string | undefined>()
  const dispatch = useDispatch()
  const inputs = useInputsSelector()

  const onEquals = useCallback(() => {
    const answer = match(calculate(inputs))
      .with(__.number, (answer) => answer.toString())
      .otherwise(() => 'Error')

    const expression = prettify(inputs)
    const record = `${expression} = ${answer}`
    dispatch(add(record))

    dispatch(clearAll())
    if (answer !== 'Error') {
      dispatch(addNumeric(answer))
    }
  }, [inputs, setAnswer])

  return { answer, onEquals }
}

export default useCalculator
