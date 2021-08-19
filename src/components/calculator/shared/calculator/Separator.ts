import styled from 'styled-components'
import { Theme } from '@core/theming'

interface Props {
  theme: Theme
  kind: 'vertical' | 'horizontal'
}

const Separator = styled.div`
  margin: ${({ kind }: Props) => (kind === 'vertical' ? '0 0.5em' : '0.5em 0')};
  ${({ kind }: Props) => (kind === 'vertical' ? 'width' : 'height')}: 1px;
  background-color: ${({ theme }: Props) => theme.calculator.borderColor};
`

export default Separator
