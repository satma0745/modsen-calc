import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  color: inherit;
  margin-left: 0.5em;

  opacity: 0.7;
  text-decoration: none;

  &.active {
    opacity: 1;
    text-decoration: underline;
  }
`

export default Link
