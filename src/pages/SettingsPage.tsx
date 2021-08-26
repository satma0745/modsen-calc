import React, { FC } from 'react'
import { HistorySection, ThemeSection } from '@components/settings'

const SettingsPage: FC = () => (
  <div data-testid="settings">
    <h1>Settings</h1>
    <ThemeSection />
    <HistorySection />
  </div>
)

export default SettingsPage
