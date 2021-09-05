import styled from 'styled-components'

const Surface = styled.div`
  color: ${({ theme }) => theme.color[2]};
  background-color: ${({ theme }) => theme.background[3]};
  padding: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.fontSize[2]};
  display: flex;
  flex-direction: row;
`

export default Surface
