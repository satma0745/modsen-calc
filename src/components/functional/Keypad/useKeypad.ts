import { useCallback } from 'react'
import { match } from 'ts-pattern'

import { useDispatch } from '@redux/hooks'
import { clearAll, clearEntry, add } from '@redux/reducers/input'

type OnEquals = () => void

interface ReturnType {
  (_: string): void
}

const useKeypad = (onEquals: OnEquals): ReturnType => {
  const dispatch = useDispatch()

  const onKeyPress = useCallback(
    (key: string) => {
      match(key)
        .with('C', () => dispatch(clearAll()))
        .with('CE', () => dispatch(clearEntry()))
        .with('=', () => onEquals())
        .otherwise(() => dispatch(add(key)))
    },
    [dispatch, onEquals],
  )

  return onKeyPress
}

export default useKeypad
