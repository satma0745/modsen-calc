import React, { FC, memo } from 'react'

import { Section, Separator, Surface } from '@components/calculator/shared/calculator'

import Display from '../Display'
import Keypad from '../Keypad'
import History from '../History'

import useCalculator from './useCalculator'

const Calculator: FC = () => {
  const { answer, onEquals } = useCalculator()

  return (
    <Surface>
      <Section scale={1.8}>
        <Display answer={answer} />
        <Separator kind="horizontal" />
        <Keypad onEquals={onEquals} />
      </Section>

      <Separator kind="vertical" />

      <Section grow={1}>
        <History />
      </Section>
    </Surface>
  )
}

export default memo(Calculator)
