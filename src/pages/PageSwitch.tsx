import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'

import SettingsPage from './SettingsPage'
import CalculatorPage from './CalculatorPage'

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
