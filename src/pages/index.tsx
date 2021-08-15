import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import CalculatorPage from './CalculatorPage'
import SettingsPage from './SettingsPage'

const PageSwitch: FC = () => (
  <Switch>
    <Route path="/settings">
      <SettingsPage />
    </Route>

    <Route path="/">
      <CalculatorPage />
    </Route>
  </Switch>
)

export default PageSwitch
