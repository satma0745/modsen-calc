import React, { FC } from 'react'
import styled from 'styled-components'

import { Theme } from '@core/theming'
import { PageSwitch } from '@pages'

import { Header, Page } from './layout'

interface ContainerProps {
  theme: Theme
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }: ContainerProps) => theme.application.background};
  color: ${({ theme }: ContainerProps) => theme.application.color};
`

const Application: FC = () => (
  <Container>
    <Header />
    <Page>
      <PageSwitch />
    </Page>
  </Container>
)

export default Application
