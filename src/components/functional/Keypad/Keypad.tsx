import React, { FC, memo } from 'react'

import useKeypad from './useKeypad'
import { Button, Grid } from './Styled'

interface Props {
  onEquals: () => void
}

const keys = [
  ['C', '7', '8', '9', '*'],
  ['-', '4', '5', '6', '/'],
  ['+', '1', '2', '3', '='],
  ['.', '(', '0', ')', 'CE'],
  ['+/-'],
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

export default memo(Keypad)
