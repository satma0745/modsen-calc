import React, { memo } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import calculator from '@store/calculator'

const Container = styled.div`
  text-align: right;
  font-size: 1em;
  padding: 0 2em;
`

const Display = observer(() => <Container>{calculator.display}</Container>)

export default memo(Display)
