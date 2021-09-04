import React, { FC, memo } from 'react'

import { Button, Grid } from '@components/calculator/shared/keypad'

const keys = [
  ['C', '7', '8', '9', '*'],
  ['-', '4', '5', '6', '/'],
  ['+', '1', '2', '3', '='],
  ['.', '(', '0', ')', 'CE'],
  ['+/-', '%'],
].flatMap((x) => x)

interface Props {
  onKeyPress: (_: string) => void
}

const KeypadPresentation: FC<Props> = ({ onKeyPress }) => (
  <Grid data-testid="keypad">
    {keys.map((label) => (
      <Button key={label} onClick={() => onKeyPress(label)}>
        {label}
      </Button>
    ))}
  </Grid>
)

export default memo(KeypadPresentation)
