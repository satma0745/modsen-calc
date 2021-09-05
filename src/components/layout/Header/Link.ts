import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin-left: ${({ theme }) => theme.spacing[2]};

  &.active {
    color: ${({ theme }) => theme.color[3]};
    text-decoration: underline;
  }
`

export default Link
