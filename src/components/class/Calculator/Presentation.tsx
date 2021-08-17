import React, { Component } from 'react'

import Display from '../Display'
import History from '../History'
import Keypad from '../Keypad'

import { Section, Separator, Surface } from './Styled'

interface Props {
  onEquals: () => void
  answer: string | undefined
}

class Calculator extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <Surface>
        <Section scale={1.8}>
          <Display answer={this.props.answer} />
          <hr />
          <Keypad onEquals={this.props.onEquals} />
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
