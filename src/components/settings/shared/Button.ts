import styled from 'styled-components'
import { Theme } from '@core/theming'

interface Props {
  theme: Theme
}

const Button = styled.button`
  border: 0.1em solid ${({ theme }: Props) => theme.page.color};
  border-radius: 0.3em;

  margin: 0 0.3em;
  padding: 0.2em;

  font-size: 1em;
`

export default Button
