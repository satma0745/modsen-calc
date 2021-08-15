import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Surface = styled.div`
  color: #fff;
  background-color: #434343;

  padding: 1rem;

  display: flex;
  flex-direction: row;
`

const Logo = styled.div``

const Spacer = styled.div`
  flex-grow: 1;
`

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

const Header: FC = () => (
  <Surface>
    <Logo>Modsen Calculator</Logo>

    <Spacer />

    <Link exact to="/">
      Home
    </Link>

    <Link to="/settings">Settings</Link>
  </Surface>
)

export default Header
