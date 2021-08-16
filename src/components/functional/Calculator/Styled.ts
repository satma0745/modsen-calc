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

const Separator = styled.hr`
  margin: 0 0.5em;
`

const Surface = styled.div`
  padding: 1em;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
`

export { Section, Separator, Surface }
