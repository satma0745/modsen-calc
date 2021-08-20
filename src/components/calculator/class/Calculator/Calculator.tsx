import React, { Component } from 'react'
import { connect } from 'react-redux'

import calculate from '@core/calculator'
import { prettify } from '@core/input'

import { addRecord } from '@redux/reducers/history'
import { addNumeric, clearAll, inputSelector } from '@redux/reducers/input'
import { RootState } from '@redux/store'

import Presentation from './Presentation'

interface Props {
  inputs: ReturnType<typeof inputSelector>
  add: typeof addRecord
  clearAll: typeof clearAll
  addNumeric: typeof addNumeric
}

interface State {
  isError: boolean
}

class Calculator extends Component<Props, State> {
  state: State = {
    isError: false,
  }

  constructor(props: Props) {
    super(props)

    this.onEquals = this.onEquals.bind(this)
    this.resetError = this.resetError.bind(this)
  }

  private onEquals(): void {
    const answer = calculate(this.props.inputs).toString()
    this.setState({ isError: answer === 'Error' })

    const expression = prettify(this.props.inputs)
    const record = `${expression} = ${answer}`
    this.props.add(record)

    this.props.clearAll()
    if (answer !== 'Error') {
      this.props.addNumeric(answer)
    }
  }

  private resetError() {
    this.setState({ isError: false })
  }

  render(): JSX.Element {
    return <Presentation isError={this.state.isError} onEquals={this.onEquals} onKeyPress={this.resetError} />
  }
}

const mapStateToProps = (state: RootState) => ({
  inputs: inputSelector(state),
})

const mapDispatchToProps = { add: addRecord, addNumeric, clearAll }

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
