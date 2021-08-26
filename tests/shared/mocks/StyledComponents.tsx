import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import lightTheme from '@core/theming/lightTheme'

const StyledComponentsThemeMock: FC = ({ children }) => <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>

export default StyledComponentsThemeMock
