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

export { Container, Header, List, Record }
