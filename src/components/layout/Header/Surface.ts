import styled from 'styled-components'
import { Theme } from '@components/theming'

interface Props {
  theme: Theme
}

const Surface = styled.div`
  color: ${({ theme }: Props) => theme.header.color};
  background-color: ${({ theme }: Props) => theme.header.background};

  padding: 1rem;

  display: flex;
  flex-direction: row;
`

export default Surface
