import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Calculator from '@components/calculator/class/Calculator'

const PositioningWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

class CalculatorPage extends PureComponent {
  render(): JSX.Element {
    return (
      <PositioningWrapper>
        <Calculator data-testid="calculator" />
      </PositioningWrapper>
    )
  }
}

export default CalculatorPage
