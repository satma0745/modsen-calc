import React, { PureComponent } from 'react'

import Display from '../Display'
import History from '../History'
import Keypad from '../Keypad'

import { Section, Separator, Surface } from './Styled'

class Calculator extends PureComponent {
  render(): JSX.Element {
    return (
      <Surface>
        <Section scale={1.8}>
          <Display />
          <hr />
          <Keypad />
        </Section>

        <Separator />

        <Section grow={1}>
          <History />
        </Section>
      </Surface>
    )
  }
}

export default Calculator
