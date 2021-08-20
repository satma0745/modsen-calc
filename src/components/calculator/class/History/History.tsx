import React, { createRef, PureComponent, RefObject } from 'react'
import { connect } from 'react-redux'

import { historySelector } from '@redux/reducers/history'
import { RootState } from '@redux/store'

import { Container, Header, List, Record } from '@components/calculator/shared/history'

interface Props {
  history: ReturnType<typeof historySelector>
}

interface State {
  lastRecord: RefObject<HTMLLIElement> | undefined
}

class History extends PureComponent<Props, State> {
  state: State = {
    lastRecord: undefined,
  }

  constructor(props: Props) {
    super(props)

    this.state.lastRecord = createRef<HTMLLIElement>()
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.history !== this.props.history) {
      this.state.lastRecord?.current?.scrollIntoView()
    }
  }

  render(): JSX.Element {
    return (
      <Container>
        <Header>History</Header>
        <List>
          {this.props.history.map((record, index) => {
            const ref = index === this.props.history.length - 1 ? this.state.lastRecord : undefined
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
}

const mapStateToProps = (state: RootState) => ({
  history: historySelector(state),
})

export default connect(mapStateToProps)(History)
