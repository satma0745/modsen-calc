import styled from 'styled-components'

interface Props {
  kind: 'vertical' | 'horizontal'
}

const Separator = styled.div<Props>`
  margin: ${({ kind, theme }) => (kind === 'vertical' ? `0 ${theme.spacing[1]}` : `${theme.spacing[1]} 0`)};
  ${({ kind }) => (kind === 'vertical' ? 'width' : 'height')}: 1px;
  background-color: ${({ theme }) => theme.color[1]};
`

export default Separator
