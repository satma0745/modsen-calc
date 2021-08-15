import React, { FC, memo } from 'react'

import Button from './Button'
import Grid from './Grid'

const keypad = [
  ['C', '7', '8', '9', '*'],
  ['-', '4', '5', '6', '/'],
  ['+', '1', '2', '3', '='],
  ['.', '(', '0', ')', 'CE'],
].flatMap((x) => x)

interface Props {
  onKeyPressed: (_: string) => void
}

const Keypad: FC<Props> = ({ onKeyPressed }) => (
  <Grid>
    {keypad.map((label) => (
      <Button key={label} onClick={() => onKeyPressed(label)}>
        {label}
      </Button>
    ))}
  </Grid>
)

export default memo(Keypad)
