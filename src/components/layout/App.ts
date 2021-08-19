import styled from 'styled-components'
import { Theme } from '@components/theming'

interface Props {
  theme: Theme
}

const App = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }: Props) => theme.application.background};
  color: ${({ theme }: Props) => theme.application.color};
`

export default App
