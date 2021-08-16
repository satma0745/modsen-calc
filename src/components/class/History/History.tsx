import React, { PureComponent } from 'react'
import { observer } from 'mobx-react'

import calculator from '@store/calculator'
import { Container, Header, List, Record } from './Styled'

const History = observer(
  class History extends PureComponent {
    render(): JSX.Element {
      return (
        <Container>
          <Header>History</Header>
          <List>
            {calculator.history.map((record, index) => (
              <Record key={index}>{record}</Record>
            ))}
          </List>
        </Container>
      )
    }
  },
)

export default History
