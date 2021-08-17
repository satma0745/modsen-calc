import { useCallback, useState } from 'react'
import { __, match } from 'ts-pattern'

import calculate from '@core/calculator'
import prettifyExpression from '@core/prettifyExpression'

import { add } from '@redux/reducers/history'
import { addMany, clearAll } from '@redux/reducers/input'
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

    const expression = prettifyExpression(inputs)
    const record = `${expression} = ${answer}`
    dispatch(add(record))

    dispatch(clearAll())
    if (answer !== 'Error') {
      dispatch(addMany(answer.split('')))
    }
  }, [inputs, setAnswer])

  return { answer, onEquals }
}

export default useCalculator
