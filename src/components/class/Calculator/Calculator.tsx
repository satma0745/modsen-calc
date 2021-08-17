import React, { Component } from 'react'
import { __, match } from 'ts-pattern'
import { connect } from 'react-redux'

import calculate from '@core/calculator'
import prettifyExpression from '@core/prettifyExpression'

import { add } from '@redux/reducers/history'
import { addMany, clearAll, inputsSelector } from '@redux/reducers/input'
import { RootState } from '@redux/store'

import Presentation from './Presentation'

interface Props {
  inputs: ReturnType<typeof inputsSelector>
  add: typeof add
  clearAll: typeof clearAll
  addMany: typeof addMany
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

    const expression = prettifyExpression(this.props.inputs)
    const record = `${expression} = ${answer}`
    this.props.add(record)

    this.props.clearAll()

    if (answer !== 'Error') {
      this.props.addMany(answer.split(''))
    }
  }

  render(): JSX.Element {
    return <Presentation answer={this.state.answer} onEquals={this.onEquals} />
  }
}

const mapStateToProps = (state: RootState) => ({
  inputs: inputsSelector(state),
})

const mapDispatchToProps = { add, addMany, clearAll }

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
