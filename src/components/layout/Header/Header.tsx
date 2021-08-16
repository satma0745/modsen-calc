import React, { FC } from 'react'

import Link from './Link'
import Logo from './Logo'
import Spacer from './Spacer'
import Surface from './Surface'

const Header: FC = () => (
  <Surface>
    <Logo>Modsen Calculator</Logo>

    <Spacer />

    <Link exact to="/">
      FC Implementation
    </Link>

    <Link exact to="/class">
      CC Implementation
    </Link>

    <Link to="/settings">Settings</Link>
  </Surface>
)

export default Header
