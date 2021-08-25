import React, { FC, memo, useEffect, useRef } from 'react'

import { Container, Header, List, Record } from '@components/calculator/shared/history'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

interface Props {
  history: string[]
}

const PureHistory: FC<Props> = ({ history }) => {
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
const PureHistoryMemo = memo(PureHistory)

const HistoryWithErrorBoundary: FC<Props> = (props) => (
  <ErrorBoundary errorMessage="History just crashed 😢">
    <PureHistoryMemo {...props} />
  </ErrorBoundary>
)

export default memo(HistoryWithErrorBoundary)
