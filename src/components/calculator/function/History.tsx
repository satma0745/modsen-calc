import React, { FC, memo, useEffect, useRef } from 'react'

import { useHistorySelector } from '@redux/hooks'

import { Container, Header, List, Record } from '@components/calculator/shared/history'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

const History: FC = () => {
  const history = useHistorySelector()

  const lastRecord = useRef<HTMLLIElement>(null)
  useEffect(() => {
    if (lastRecord.current !== null) {
      lastRecord.current.scrollIntoView()
    }
  }, [history, lastRecord.current])

  return (
    <Container>
      <Header>History</Header>
      <List>
        {history.map((record, index) => {
          const ref = index === history.length - 1 ? lastRecord : undefined
          return (
            <Record key={index} ref={ref}>
              {record}
            </Record>
          )
        })}
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
