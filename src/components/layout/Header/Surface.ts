import styled from 'styled-components'

const Surface = styled.div`
  color: ${({ theme }) => theme.header.color};
  background-color: ${({ theme }) => theme.header.background};

  padding: 1rem;

  display: flex;
  flex-direction: row;
`

export default Surface
