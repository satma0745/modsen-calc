import styled from 'styled-components'

interface Props {
  scale?: number
  orientation?: 'horizontal' | 'vertical'
}

const Section = styled.section`
  padding: 1em 0;

  font-size: ${({ scale }: Props) => scale ?? 1}em;
  flex: ${({ scale }: Props) => scale ?? 1};

  display: flex;
  flex-direction: ${({ orientation = 'vertical' }: Props) => (orientation === 'horizontal' ? 'row' : 'column')};
`

export default Section
