import styled from 'styled-components'
import { Theme } from '@core/theming'

interface SectionProps {
  scale?: number
  grow?: number
}
const Section = styled.section`
  padding: 1em 0;
  font-size: ${({ scale }: SectionProps) => scale ?? 1}em;
  flex-grow: ${({ grow }: SectionProps) => grow};
`

interface SeparatorProps {
  theme: Theme
  kind: 'vertical' | 'horizontal'
}
const Separator = styled.div`
  margin: ${({ kind }: SeparatorProps) => (kind === 'vertical' ? '0 0.5em' : '0.5em 0')};
  ${({ kind }: SeparatorProps) => (kind === 'vertical' ? 'width' : 'height')}: 1px;
  background-color: ${({ theme }: SeparatorProps) => theme.calculator.borderColor};
`

interface SurfaceProps {
  theme: Theme
}
const Surface = styled.div`
  padding: 1em;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }: SurfaceProps) => theme.calculator.borderColor};

  display: flex;
  flex-direction: row;
`

export { Section, Separator, Surface }
