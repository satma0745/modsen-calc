import React, { memo } from 'react'
import { observer } from 'mobx-react'

import calculator from '@store/calculator'
import { Container, Header, List, Record } from './Styled'

const History = observer(() => (
  <Container>
    <Header>History</Header>
    <List>
      {calculator.history.map((record, index) => (
        <Record key={index}>{record}</Record>
      ))}
    </List>
  </Container>
))

export default memo(History)
