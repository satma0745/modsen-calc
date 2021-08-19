import React, { FC, memo } from 'react'

import { useHistorySelector } from '@redux/hooks'
import { Container, Header, List, Record } from '@components/calculator/shared/history'

const History: FC = () => {
  const history = useHistorySelector()

  return (
    <Container>
      <Header>History</Header>
      <List>
        {history.map((record, index) => (
          <Record key={index}>{record}</Record>
        ))}
      </List>
    </Container>
  )
}

export default memo(History)
