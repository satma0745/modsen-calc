import React, { memo } from 'react'
import { observer } from 'mobx-react'

import calculator from '@store/calculator'
import { Button, Grid } from './Styled'

const keypad = [
  ['C', '7', '8', '9', '*'],
  ['-', '4', '5', '6', '/'],
  ['+', '1', '2', '3', '='],
  ['.', '(', '0', ')', 'CE'],
].flatMap((x) => x)

const Keypad = observer(() => (
  <Grid>
    {keypad.map((label) => (
      <Button key={label} onClick={() => calculator.onInput(label)}>
        {label}
      </Button>
    ))}
  </Grid>
))

export default memo(Keypad)
