import styled from 'styled-components'
import { Theme } from '@components/theming'

interface ButtonProps {
  theme: Theme
}

const Button = styled.button`
  width: 2.5em;
  height: 2.5em;

  font-size: 1em;
  line-height: 1.2em;

  color: ${({ theme }: ButtonProps) => theme.calculator.button.color};
  background: ${({ theme }: ButtonProps) => theme.calculator.button.background};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }: ButtonProps) => theme.calculator.button.borderColor};
  border-radius: 0.5em;
`

const Grid = styled.div`
  padding: 0 2em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(5, 1fr);
`

export { Button, Grid }
