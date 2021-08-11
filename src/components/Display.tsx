import React, { FC, memo } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: right;
  font-size: 1em;
  padding: 0 2em;
`

interface Props {
  content: string
}

const Display: FC<Props> = ({ content }) => <Container>{content}</Container>

export default memo(Display)
