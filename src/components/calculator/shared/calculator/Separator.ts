import styled from 'styled-components'

interface Props {
  kind: 'vertical' | 'horizontal'
}

const Separator = styled.div<Props>`
  margin: ${({ kind }) => (kind === 'vertical' ? '0 0.5em' : '0.5em 0')};
  ${({ kind }) => (kind === 'vertical' ? 'width' : 'height')}: 1px;
  background-color: ${({ theme }) => theme.calculator.borderColor};
`

export default Separator
