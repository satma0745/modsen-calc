import styled from 'styled-components'

const Button = styled.button`
  display: block;
  margin: 0 auto;

  width: calc(${({ theme }) => theme.spacing[5]});
  height: calc(${({ theme }) => theme.spacing[5]});
  font-size: ${({ theme }) => theme.fontSize[4]};

  color: ${({ theme }) => theme.color[0]};
  background: ${({ theme }) => theme.background[2]};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.spacing[1]};
`

export default Button
