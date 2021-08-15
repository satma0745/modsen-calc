import React, { FC, memo } from 'react'

import Container from './Container'
import Header from './Header'
import List from './List'
import Record from './Record'

interface Props {
  history: string[]
}

const History: FC<Props> = ({ history }) => (
  <Container>
    <Header>History</Header>
    <List>
      {history.map((record, index) => (
        <Record key={index}>{record}</Record>
      ))}
    </List>
  </Container>
)

export default memo(History)
