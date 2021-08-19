import React, { Component } from 'react'
import { connect } from 'react-redux'
import { __, match } from 'ts-pattern'

import { prettify } from '@core/input'

import { RootState } from '@redux/store'
import { inputSelector } from '@redux/reducers/input'

import { Container } from '@components/calculator/shared/display'

interface Props {
  inputs: ReturnType<typeof inputSelector>
  answer: string | undefined
}

class Display extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  get display() {
    return match<[number, string | undefined]>([this.props.inputs.length, this.props.answer])
      .with([0, undefined], () => '0')
      .with([0, __.string], ([_, answer]) => answer)
      .otherwise(() => prettify(this.props.inputs))
  }

  render(): JSX.Element {
    return <Container>{this.display}</Container>
  }
}

const mapStateToProps = (state: RootState) => ({
  inputs: inputSelector(state),
})

export default connect(mapStateToProps)(Display)
