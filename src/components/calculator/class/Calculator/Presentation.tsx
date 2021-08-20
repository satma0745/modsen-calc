import React, { Component } from 'react'

import { Section, Separator, Surface } from '@components/calculator/shared/calculator'

import Display from '../Display'
import History from '../History'
import Keypad from '../Keypad'

type SideEffect = () => void

interface Props {
  isError: boolean
  showHistory: boolean
  onEquals: SideEffect
  onKeyPress: SideEffect
}

class Calculator extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <Surface>
        <Section scale={2}>
          <Display isError={this.props.isError} />
          <Separator kind="horizontal" />
          <Keypad onEquals={this.props.onEquals} onKeyPress={this.props.onKeyPress} />
        </Section>

        {this.props.showHistory && (
          <Section orientation="horizontal">
            <Separator kind="vertical" />

            <Section>
              <History />
            </Section>
          </Section>
        )}
      </Surface>
    )
  }
}

export default Calculator
