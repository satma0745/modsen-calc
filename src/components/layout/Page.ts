import styled from 'styled-components'
import { Theme } from '@core/theming'

interface Props {
  theme: Theme
}

const Page = styled.div`
  flex-grow: 1;
  width: min(1000px, 100%);

  margin: 0 auto;
  padding: 2rem 5rem;

  box-sizing: content-box;

  background: ${({ theme }: Props) => theme.page.background};
  color: ${({ theme }: Props) => theme.page.color};

  box-shadow: #00000001 0 0 10px 5px;
`

export default Page
