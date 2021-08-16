import React, { PureComponent } from 'react'

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

class Keypad extends PureComponent<Props> {
  render(): JSX.Element {
    return (
      <Grid>
        {keypad.map((label) => (
          <Button key={label} onClick={() => this.props.onKeyPressed(label)}>
            {label}
          </Button>
        ))}
      </Grid>
    )
  }
}

export default Keypad
