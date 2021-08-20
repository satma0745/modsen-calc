import React, { Component } from 'react'
import { connect } from 'react-redux'
import { __, match } from 'ts-pattern'

import { prettify } from '@core/input'

import { RootState } from '@redux/store'
import { inputSelector } from '@redux/reducers/input'

import { Container } from '@components/calculator/shared/display'

interface PublicProps {
  isError: boolean
}

interface Props extends PublicProps {
  inputs: ReturnType<typeof inputSelector>
}

class Display extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  get display() {
    return match<[number, boolean]>([this.props.inputs.length, this.props.isError])
      .with([0, true], () => 'Error')
      .with([0, false], () => '0')
      .with([__, __], () => prettify(this.props.inputs))
      .exhaustive()
  }

  render(): JSX.Element {
    return <Container>{this.display}</Container>
  }
}

const mapStateToProps = (state: RootState) => ({
  inputs: inputSelector(state),
})

export default connect(mapStateToProps)(Display)
export { PublicProps as Props }
