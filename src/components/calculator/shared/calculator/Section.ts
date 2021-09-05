import styled from 'styled-components'

interface Props {
  scale?: number
  orientation?: 'horizontal' | 'vertical'
}

const Section = styled.section<Props>`
  padding: ${({ theme }) => theme.spacing[1]} 0;
  flex: ${({ scale }) => scale ?? 1};
  font-size: ${({ scale, theme }) => theme.fontSize[scale ?? 1]};
  display: flex;
  flex-direction: ${({ orientation = 'vertical' }) => (orientation === 'horizontal' ? 'row' : 'column')};
`

export default Section
