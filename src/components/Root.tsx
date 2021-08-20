import React, { FC, useMemo } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { selectTheme } from '@core/theming'
import store from '@redux/store'
import { useAppearanceSelector } from '@redux/hooks'

import Application from './Application'

const ThemeProvider: FC = ({ children }) => {
  const { theme: themeKind } = useAppearanceSelector()
  const theme = useMemo(() => selectTheme(themeKind), [themeKind])

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

const Root: FC = () => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
)

export default Root
