import { useCallback } from 'react'
import { match } from 'ts-pattern'

import { useDispatch } from '@redux/hooks'
import { clearAll, clearEntry, addNonNumeric, addNumeric, changeSign } from '@redux/reducers/input'

type SideEffect = () => void

interface ReturnType {
  (_: string): void
}

const useKeypad = (onEquals: SideEffect, onEachKeyPress: SideEffect): ReturnType => {
  const dispatch = useDispatch()

  const onKeyPress = useCallback(
    (key: string) => {
      onEachKeyPress()

      match(key)
        .with('C', () => dispatch(clearAll()))
        .with('CE', () => dispatch(clearEntry()))
        .with('=', () => onEquals())
        .with('+/-', () => dispatch(changeSign()))
        .with('+', '-', '*', '/', '%', '(', ')', () => dispatch(addNonNumeric(key)))
        .with('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', () => dispatch(addNumeric(key)))
        .otherwise(() => {
          throw new Error(`Unsupported key "${key}"`)
        })
    },
    [dispatch, onEquals],
  )

  return onKeyPress
}

export default useKeypad
