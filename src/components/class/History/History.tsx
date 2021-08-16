import React, { PureComponent } from 'react'

import Container from './Container'
import Header from './Header'
import List from './List'
import Record from './Record'

interface Props {
  history: string[]
}

class History extends PureComponent<Props> {
  render(): JSX.Element {
    return (
      <Container>
        <Header>History</Header>
        <List>
          {this.props.history.map((record, index) => (
            <Record key={index}>{record}</Record>
          ))}
        </List>
      </Container>
    )
  }
}

export default History
