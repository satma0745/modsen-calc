import styled from 'styled-components'

const Container = styled.div`
  text-align: right;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.fontSize[4]};
`

export default Container
