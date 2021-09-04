import React, { FC } from 'react'
import styled from 'styled-components'

import { PageSwitch } from '@pages'

import { Header, Page } from './layout'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.application.background};
  color: ${({ theme }) => theme.application.color};
`

const Application: FC = () => (
  <Container>
    <Header />
    <Page data-testid="page">
      <PageSwitch />
    </Page>
  </Container>
)

export default Application
