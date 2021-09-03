import styled from 'styled-components'

const Page = styled.div`
  flex-grow: 1;
  width: min(1000px, 100%);

  margin: 0 auto;
  padding: 2rem 5rem;

  box-sizing: content-box;

  background: ${({ theme }) => theme.page.background};
  color: ${({ theme }) => theme.page.color};

  box-shadow: #00000001 0 0 10px 5px;
`

export default Page
