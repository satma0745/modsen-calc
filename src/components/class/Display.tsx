import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { __, match } from 'ts-pattern'

import { prettify } from '@core/input'
import { RootState } from '@redux/store'
import { inputsSelector } from '@redux/reducers/input'

const Container = styled.div`
  text-align: right;
  font-size: 1em;
  padding: 0 2em;
`

interface Props {
  inputs: ReturnType<typeof inputsSelector>
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
  inputs: inputsSelector(state),
})

export default connect(mapStateToProps)(Display)
