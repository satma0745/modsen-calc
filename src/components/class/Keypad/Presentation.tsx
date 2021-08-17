import React, { PureComponent } from 'react'
import { Button, Grid } from './Styled'

const keypad = [
  ['C', '7', '8', '9', '*'],
  ['-', '4', '5', '6', '/'],
  ['+', '1', '2', '3', '='],
  ['.', '(', '0', ')', 'CE'],
].flatMap((x) => x)

interface Props {
  onKeyPress: (_: string) => void
}

class Keypad extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <Grid>
        {keypad.map((label) => (
          <Button key={label} onClick={() => this.props.onKeyPress(label)}>
            {label}
          </Button>
        ))}
      </Grid>
    )
  }
}

export default Keypad
