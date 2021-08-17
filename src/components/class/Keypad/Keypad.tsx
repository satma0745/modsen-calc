import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { match } from 'ts-pattern'

import { clearAll, clearEntry, add } from '@redux/reducers/input'
import Presentation from './Presentation'

interface Props {
  clearAll: typeof clearAll
  clearEntry: typeof clearEntry
  add: typeof add
  onEquals: () => void
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
      .otherwise(() => this.props.add(key))
  }

  render(): JSX.Element {
    return <Presentation onKeyPress={this.onKeyPress} />
  }
}

const mapDispatchToProps = { clearAll, clearEntry, add }

export default connect(null, mapDispatchToProps)(Controller)
