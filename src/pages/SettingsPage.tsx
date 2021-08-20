import React, { FC } from 'react'
import { HistoryControl, ThemeControl } from '@components/settings'

const SettingsPage: FC = () => (
  <div>
    <h1>Settings</h1>
    <ThemeControl />
    <HistoryControl />
  </div>
)

export default SettingsPage
