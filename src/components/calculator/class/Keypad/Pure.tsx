import React, { PureComponent } from 'react'
import { match } from 'ts-pattern'

import Presentation from './Presentation'

interface Props {
  onEquals: () => void
  onKeyPress: () => void
  clearAll: () => void
  clearEntry: () => void
  changeSign: () => void
  addNumeric: (_: string) => void
  addNonNumeric: (_: string) => void
}

class PureKeypad extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  private onKeyPress(key: string) {
    this.props.onKeyPress()
    match(key)
      .with('C', () => this.props.clearAll())
      .with('CE', () => this.props.clearEntry())
      .with('=', () => this.props.onEquals())
      .with('+/-', () => this.props.changeSign())
      .with('+', '-', '*', '/', '%', '(', ')', () => this.props.addNonNumeric(key))
      .with('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', () => this.props.addNumeric(key))
      .otherwise(() => {
        throw new Error(`Unsupported key "${key}"`)
      })
  }

  render(): JSX.Element {
    return <Presentation onKeyPress={this.onKeyPress} />
  }
}

export default PureKeypad
export { Props }
