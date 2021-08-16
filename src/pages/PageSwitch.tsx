import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'

import SettingsPage from './SettingsPage'
import FunctionalCalculatorPage from './FunctionalImplementationPage'
import ClassCalculatorPage from './ClassImplementationPage'

const PageSwitch: FC = () => (
  <Switch>
    <Route path="/settings">
      <SettingsPage />
    </Route>

    <Route path="/class">
      <ClassCalculatorPage />
    </Route>

    <Route path="/">
      <FunctionalCalculatorPage />
    </Route>
  </Switch>
)

export default PageSwitch
