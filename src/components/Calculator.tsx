import React, { FC } from 'react'
import styled from 'styled-components'

import useCalculator from '@hooks/useCalculator'

import Display from './Display'
import Keypad from './Keypad'
import History from './History'

const Surface = styled.div`
  padding: 1em;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
`

interface SectionProps {
  scale?: number
  grow?: number
}

const Section = styled.section`
  padding: 1em 0;
  font-size: ${({ scale }: SectionProps) => scale ?? 1}em;
  flex-grow: ${({ grow }: SectionProps) => grow};
`

const SectionSeparator = styled.hr`
  margin: 0 0.5em;
`

const Calculator: FC = () => {
  const { display, history, handleInput } = useCalculator()

  return (
    <Surface>
      <Section scale={1.8}>
        <Display content={display} />
        <hr />
        <Keypad onKeyPressed={handleInput} />
      </Section>

      <SectionSeparator />

      <Section grow={1}>
        <History history={history} />
      </Section>
    </Surface>
  )
}

export default Calculator
