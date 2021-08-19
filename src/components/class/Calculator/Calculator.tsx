import React, { Component } from 'react'
import { __, match } from 'ts-pattern'
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
  answer: string | undefined
}

class Calculator extends Component<Props, State> {
  state: State = {
    answer: undefined,
  }

  constructor(props: Props) {
    super(props)

    this.onEquals = this.onEquals.bind(this)
  }

  onEquals(): void {
    const answer = match(calculate(this.props.inputs))
      .with(__.number, (answer) => answer.toString())
      .otherwise(() => 'Error')

    const expression = prettify(this.props.inputs)
    const record = `${expression} = ${answer}`
    this.props.add(record)

    this.props.clearAll()

    if (answer !== 'Error') {
      this.props.addNumeric(answer)
    }
  }

  render(): JSX.Element {
    return <Presentation answer={this.state.answer} onEquals={this.onEquals} />
  }
}

const mapStateToProps = (state: RootState) => ({
  inputs: inputSelector(state),
})

const mapDispatchToProps = { add: addRecord, addNumeric, clearAll }

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
