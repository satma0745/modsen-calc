import React, { FC, memo } from 'react'

import { useHistorySelector } from '@redux/hooks'

import { Container, Header, List, Record } from '@components/calculator/shared/history'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

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

const ErrorWrapper: FC = () => (
  <ErrorBoundary errorMessage="History just crashed 😢">
    <History />
  </ErrorBoundary>
)

export default memo(ErrorWrapper)
