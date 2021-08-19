import React, { FC, memo, ReactNode, useMemo } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { match } from 'ts-pattern'

import { useThemeSelector } from '@redux/hooks'

import lightTheme from './lightTheme'
import darkTheme from './darkTheme'

interface Props {
  children: ReactNode
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const selectedTheme = useThemeSelector()

  const theme = useMemo(() => {
    return match(selectedTheme)
      .with('light', () => lightTheme)
      .with('dark', () => darkTheme)
      .exhaustive()
  }, [selectedTheme])

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

export default memo(ThemeProvider)
