import React, { Component } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import calculator from '@store/calculator'

const Container = styled.div`
  text-align: right;
  font-size: 1em;
  padding: 0 2em;
`

const Display = observer(
  class Display extends Component {
    render(): JSX.Element {
      return <Container>{calculator.display}</Container>
    }
  },
)

export default Display
