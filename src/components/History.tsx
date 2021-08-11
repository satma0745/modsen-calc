import React, { FC, memo } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 1em;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 1em;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
  list-style: none;
`

const Record = styled.li`
  margin: 0.8em 0;
`

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
