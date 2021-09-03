import styled from 'styled-components'

interface Props {
  scale?: number
  orientation?: 'horizontal' | 'vertical'
}

const Section = styled.section<Props>`
  padding: 1em 0;

  font-size: ${({ scale }) => scale ?? 1}em;
  flex: ${({ scale }) => scale ?? 1};

  display: flex;
  flex-direction: ${({ orientation = 'vertical' }) => (orientation === 'horizontal' ? 'row' : 'column')};
`

export default Section
