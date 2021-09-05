import React, { FC } from 'react'
import styled from 'styled-components'

import { HistorySection, ThemeSection } from '@components/settings'

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[3]};
`

const SettingsPage: FC = () => (
  <div data-testid="settings">
    <Title>Settings</Title>

    <ThemeSection />
    <HistorySection />
  </div>
)

export default SettingsPage
