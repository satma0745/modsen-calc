import styled from 'styled-components'
import { Theme } from '@core/theming'

interface Props {
  theme: Theme
}

const Button = styled.button`
  display: block;
  margin: 0 auto;

  width: 2.5em;
  height: 2.5em;

  font-size: 1em;
  line-height: 1.2em;

  color: ${({ theme }: Props) => theme.calculator.button.color};
  background: ${({ theme }: Props) => theme.calculator.button.background};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }: Props) => theme.calculator.button.borderColor};
  border-radius: 0.5em;
`

export default Button
