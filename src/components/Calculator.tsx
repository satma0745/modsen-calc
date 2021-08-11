import React, { FC } from 'react'
import styled from 'styled-components'

import { useDisplay, useHistory } from '../hooks'

import Display from './Display'
import Keypad from './Keypad'
import History from './History'

const Surface = styled.div`
  display: flex;
  flex-direction: row;
`

const Section = styled.section`
  padding: 1em 0;
  font-size: ${({ scale }: { scale?: number }) => scale ?? 1}em;
`

const SectionSeparator = styled.hr`
  margin: 0 0.5em;
`

const Calculator: FC = () => {
  const display = useDisplay()
  const history = useHistory()

  return (
    <Surface>
      <Section scale={1.8}>
        <Display content={display} />
        <hr />
        <Keypad />
      </Section>

      <SectionSeparator />

      <Section>
        <History history={history} />
      </Section>
    </Surface>
  )
}

export default Calculator
