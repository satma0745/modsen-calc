import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { match } from 'ts-pattern'

import { clearAll, clearEntry, changeSign, addNumeric, addNonNumeric } from '@redux/reducers/input'
import Presentation from './Presentation'

interface PublicProps {
  onEquals: () => void
}

interface Props extends PublicProps {
  clearAll: typeof clearAll
  clearEntry: typeof clearEntry
  changeSign: typeof changeSign
  addNumeric: typeof addNumeric
  addNonNumeric: typeof addNonNumeric
}

class Controller extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)

    this.onKeyPress = this.onKeyPress.bind(this)
  }

  private onKeyPress(key: string) {
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

const mapDispatchToProps = { clearAll, clearEntry, changeSign, addNumeric, addNonNumeric }

export default connect(null, mapDispatchToProps)(Controller)
export { PublicProps as Props }
