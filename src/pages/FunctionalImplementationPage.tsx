import React, { FC } from 'react'
import styled from 'styled-components'

import Calculator from '@components/functional/Calculator'

const PositioningWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const CalculatorPage: FC = () => (
  <PositioningWrapper>
    <Calculator />
  </PositioningWrapper>
)

export default CalculatorPage
