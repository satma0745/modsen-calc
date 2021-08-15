import React, { FC } from 'react'

import Display from '../Display'
import Keypad from '../Keypad'
import History from '../History'

import Surface from './Surface'
import Section, { Separator } from './Section'
import useCalculator from './useCalculator'

const Calculator: FC = () => {
  const { display, history, handleInput } = useCalculator()

  return (
    <Surface>
      <Section scale={1.8}>
        <Display content={display} />
        <hr />
        <Keypad onKeyPressed={handleInput} />
      </Section>

      <Separator />

      <Section grow={1}>
        <History history={history} />
      </Section>
    </Surface>
  )
}

export default Calculator
