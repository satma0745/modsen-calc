import styled from 'styled-components'

interface Props {
  scale?: number
  grow?: number
}

const Section = styled.section`
  padding: 1em 0;
  font-size: ${({ scale }: Props) => scale ?? 1}em;
  flex-grow: ${({ grow }: Props) => grow};
`

export default Section
