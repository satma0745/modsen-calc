import styled from 'styled-components'

const Page = styled.div`
  flex-grow: 1;
  width: min(calc(${({ theme }) => theme.spacing[5]} * 10), 100%);

  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};

  box-sizing: content-box;

  background: ${({ theme }) => theme.background[0]};
  color: ${({ theme }) => theme.color[0]};

  box-shadow: #00000001 0 0 ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[0]};
`

export default Page
