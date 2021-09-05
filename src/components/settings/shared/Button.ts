import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.color[0]};
  border-radius: ${({ theme }) => theme.spacing[0]};
  font-size: ${({ theme }) => theme.fontSize[0]};
  margin: 0 ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[0]} ${({ theme }) => theme.spacing[1]};
`

export default Button
