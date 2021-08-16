import React from 'react'
import { __, match } from 'ts-pattern'

import { prettify } from '@core/inputs'

import Container from './Container'
import DisplayBase from './DisplayBase'

class Display extends DisplayBase {
  onNewInputs(inputs: string[]): void {
    const display = match<[number, string | undefined]>([inputs.length, this.props.answer])
      .with([0, undefined], () => '0')
      .with([0, __], ([_, answer]) => answer as string)
      .otherwise(() => prettify(inputs))

    this.setState({ display })
  }

  render(): JSX.Element {
    return <Container>{this.state.display}</Container>
  }
}

export default Display
