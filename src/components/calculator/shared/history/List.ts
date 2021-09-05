import styled from 'styled-components'

const List = styled.ul`
  max-height: calc(${({ theme }) => theme.spacing[2]} * 35);
  overflow-y: hidden;
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  padding: 0;
  list-style: none;
`

export default List
