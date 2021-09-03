import styled from 'styled-components'

const Surface = styled.div`
  padding: 1em;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.calculator.borderColor};

  display: flex;
  flex-direction: row;
`

export default Surface
