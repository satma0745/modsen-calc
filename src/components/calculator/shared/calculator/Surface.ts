import styled from 'styled-components'

const Surface = styled.div`
  padding: ${({ theme }) => theme.spacing[2]};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color[1]};

  display: flex;
  flex-direction: row;
`

export default Surface
