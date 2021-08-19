import React, { FC, memo } from 'react'

import { Button, Grid } from '@components/calculator/shared/keypad'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

import useKeypad from './useKeypad'

interface Props {
  onEquals: () => void
}

const keys = [
  ['C', '7', '8', '9', '*'],
  ['-', '4', '5', '6', '/'],
  ['+', '1', '2', '3', '='],
  ['.', '(', '0', ')', 'CE'],
  ['+/-', '%'],
].flatMap((x) => x)

const Keypad: FC<Props> = ({ onEquals }) => {
  const onKeyPress = useKeypad(onEquals)

  return (
    <Grid>
      {keys.map((label) => (
        <Button key={label} onClick={() => onKeyPress(label)}>
          {label}
        </Button>
      ))}
    </Grid>
  )
}

const ErrorWrapper: FC<Props> = (props) => (
  <ErrorBoundary errorMessage="Keypad just crashed 😢">
    <Keypad {...props} />
  </ErrorBoundary>
)

export default memo(ErrorWrapper)
