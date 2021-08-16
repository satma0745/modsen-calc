import styled from 'styled-components'

interface SectionProps {
  scale?: number
  grow?: number
}

const Section = styled.section`
  padding: 1em 0;
  font-size: ${({ scale }: SectionProps) => scale ?? 1}em;
  flex-grow: ${({ grow }: SectionProps) => grow};
`

export default Section
