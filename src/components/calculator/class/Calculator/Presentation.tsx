import React, { Component } from 'react'

import { Section, Separator, Surface } from '@components/calculator/shared/calculator'

import Display from '../Display'
import History from '../History'
import Keypad from '../Keypad'

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
          <Separator kind="horizontal" />
          <Keypad onEquals={this.props.onEquals} />
        </Section>

        <Separator kind="vertical" />

        <Section grow={1}>
          <History />
        </Section>
      </Surface>
    )
  }
}

export default Calculator
