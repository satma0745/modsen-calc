import React, { FC, memo, useCallback } from 'react'

import { useAppearanceSelector, useDispatch } from '@redux/hooks'
import { changeTheme } from '@redux/reducers/appearance'

import { Section, Select } from './shared'

const themingOptions = [
  { title: 'Light theme', value: 'light' },
  { title: 'Dark theme', value: 'dark' },
]

const ThemeSection: FC = () => {
  const { theme } = useAppearanceSelector()
  const dispatch = useDispatch()

  const selectTheme = useCallback(
    (selectedTheme: string) => {
      if (selectedTheme === 'light' || selectedTheme === 'dark') {
        dispatch(changeTheme(selectedTheme))
      } else {
        throw new Error(`Unsupported theme "${selectedTheme}"`)
      }
    },
    [dispatch],
  )

  return (
    <Section title="Theme">
      <p>The application has 2 design options: light and dark.</p>

      <p>
        You are currently using
        <Select data-testid="theme-select" value={theme} onSelect={selectTheme} options={themingOptions} />
      </p>
    </Section>
  )
}

export default memo(ThemeSection)
