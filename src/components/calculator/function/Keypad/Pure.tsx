import React, { FC, memo, useCallback } from 'react'
import { match } from 'ts-pattern'

import Presentation from './Presentation'

interface Props {
  resetError: () => void
  clear: (_: 'all' | 'entry') => void
  onEquals: () => void
  changeSign: () => void
  addNonNumeric: (_: string) => void
  addNumeric: (_: string) => void
}

const PureKeypad: FC<Props> = ({ resetError, clear, onEquals, changeSign, addNonNumeric, addNumeric }) => {
  const onKeyPress = useCallback(
    (key: string) => {
      resetError()
      match(key)
        .with('C', () => clear('all'))
        .with('CE', () => clear('entry'))
        .with('=', () => onEquals())
        .with('+/-', () => changeSign())
        .with('+', '-', '*', '/', '%', '(', ')', () => addNonNumeric(key))
        .with('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', () => addNumeric(key))
        .otherwise(() => {
          throw new Error(`Unsupported key "${key}"`)
        })
    },
    [resetError, clear, onEquals, changeSign, addNonNumeric, addNumeric],
  )

  return <Presentation onKeyPress={onKeyPress} />
}

export default memo(PureKeypad)
export { Props }
