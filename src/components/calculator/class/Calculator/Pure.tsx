import React, { PureComponent } from 'react'

import calculate from '@core/calculator'
import { Input, prettify } from '@core/input'

import { Section, Separator, Surface } from '@components/calculator/shared/calculator'
import Display from '@components/calculator/class/Display'
import Keypad from '@components/calculator/class/Keypad'
import History from '@components/calculator/class/History'

interface Props {
  input: Input
  history: string[]
  showHistory: boolean
  addRecord: (_: string) => void
  clearAll: () => void
  clearEntry: () => void
  changeSign: () => void
  addNumeric: (_: string) => void
  addNonNumeric: (_: string) => void
}

interface State {
  isError: boolean
}

class PureCalculator extends PureComponent<Props, State> {
  state: State = {
    isError: false,
  }

  constructor(props: Props) {
    super(props)

    this.onEquals = this.onEquals.bind(this)
    this.resetError = this.resetError.bind(this)
  }

  private onEquals(): void {
    const answer = calculate(this.props.input)
    if (answer === 'Error') {
      this.setState({ isError: true })
    }

    const expression = prettify(this.props.input)
    const record = `${expression} = ${answer}`
    this.props.addRecord(record)

    this.props.clearAll()
    if (answer !== 'Error') {
      this.props.addNumeric(answer.toString())
    }
  }

  private resetError() {
    this.setState({ isError: false })
  }

  render(): JSX.Element {
    return (
      <Surface {...this.props}>
        <Section scale={2}>
          <Display isError={this.state.isError} input={this.props.input} />
          <Separator kind="horizontal" />
          <Keypad
            onEquals={this.onEquals}
            onKeyPress={this.resetError}
            clearAll={this.props.clearAll}
            clearEntry={this.props.clearEntry}
            changeSign={this.props.changeSign}
            addNumeric={this.props.addNumeric}
            addNonNumeric={this.props.addNonNumeric}
          />
        </Section>

        {this.props.showHistory && (
          <Section orientation="horizontal">
            <Separator kind="vertical" />

            <Section>
              <History history={this.props.history} />
            </Section>
          </Section>
        )}
      </Surface>
    )
  }
}

export default PureCalculator
export { Props }
