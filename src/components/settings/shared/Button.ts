import styled from 'styled-components'

const Button = styled.button`
  border: 0.1em solid ${({ theme }) => theme.page.color};
  border-radius: 0.3em;

  margin: 0 0.3em;
  padding: 0.2em;

  font-size: 1em;
`

export default Button
