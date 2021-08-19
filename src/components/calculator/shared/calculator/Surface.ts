import styled from 'styled-components'
import { Theme } from '@core/theming'

interface Props {
  theme: Theme
}

const Surface = styled.div`
  padding: 1em;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }: Props) => theme.calculator.borderColor};

  display: flex;
  flex-direction: row;
`

export default Surface
