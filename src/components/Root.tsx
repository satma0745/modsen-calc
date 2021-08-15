import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import PageSwitch from '@pages'

import Header from './Header'

const App = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
`

const Page = styled.div`
  flex-grow: 1;
  width: min(1000px, 100%);
  margin: 0 auto;
  padding: 2rem 5rem;
  box-sizing: content-box;
  background-color: #fff;
  box-shadow: #00000001 0 0 10px 5px;
`

const Root: FC = () => (
  <BrowserRouter>
    <App>
      <Header />
      <Page>
        <PageSwitch />
      </Page>
    </App>
  </BrowserRouter>
)

export default Root
