import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  font-size: ${({ theme }) => theme.fontSize[1]};
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize[2]};
`

interface Props {
  title: string
}

const Section: FC<Props> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
)

export default Section
