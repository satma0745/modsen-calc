import React from 'react'

import calculate from '@core/calculator'
import { prettify } from '@core/inputs'

import Display from '../Display'
import History from '../History'
import Keypad from '../Keypad'

import CalculatorBase from './CalculatorBase'
import Section from './Section'
import Separator from './Separator'
import Surface from './Surface'

class Calculator extends CalculatorBase {
  onEquals(): number | false {
    const calculated = calculate(this.state.inputs)

    const expression = prettify(this.state.inputs)
    this.pushToHistory(expression, calculated)

    return calculated
  }

  private pushToHistory(expression: string, answer: number | false) {
    const record = `${expression} = ${answer}`

    const newHistory = [...this.state.history, record]
    this.setState({ history: newHistory })
  }

  render(): JSX.Element {
    return (
      <Surface>
        <Section scale={1.8}>
          <Display content={this.state.display} answer={this.state.answer} />
          <hr />
          <Keypad onKeyPressed={this.state.onInput} />
        </Section>

        <Separator />

        <Section grow={1}>
          <History history={this.state.history} />
        </Section>
      </Surface>
    )
  }
}

export default Calculator
