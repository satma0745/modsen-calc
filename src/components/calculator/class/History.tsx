import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { historySelector } from '@redux/reducers/history'
import { RootState } from '@redux/store'
import { Container, Header, List, Record } from '@components/calculator/shared/history'

interface Props {
  history: ReturnType<typeof historySelector>
}

class History extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

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

const mapStateToProps = (state: RootState) => ({
  history: historySelector(state),
})

export default connect(mapStateToProps)(History)
