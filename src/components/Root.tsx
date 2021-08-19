import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'

import PageSwitch from '@pages'
import store from '@redux/store'

import { App, Header, Page } from './layout'
import { ThemeProvider } from './theming'

const Root: FC = () => (
  <StoreProvider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <App>
          <Header />
          <Page>
            <PageSwitch />
          </Page>
        </App>
      </BrowserRouter>
    </ThemeProvider>
  </StoreProvider>
)

export default Root
