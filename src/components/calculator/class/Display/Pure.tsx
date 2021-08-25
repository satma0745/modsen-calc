import React, { PureComponent } from 'react'
import { __, match } from 'ts-pattern'

import { Input, prettify } from '@core/input'
import { Container } from '@components/calculator/shared/display'

interface Props {
  isError: boolean
  input: Input
}

class PureDisplay extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  private get display() {
    return match<[number, boolean]>([this.props.input.length, this.props.isError])
      .with([0, true], () => 'Error')
      .with([0, false], () => '0')
      .with([__, __], () => prettify(this.props.input))
      .exhaustive()
  }

  render(): JSX.Element {
    return <Container>{this.display}</Container>
  }
}

export default PureDisplay
export { Props }
