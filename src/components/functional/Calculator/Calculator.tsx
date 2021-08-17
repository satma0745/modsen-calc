import React, { FC, memo } from 'react'

import useCalculator from '@components/functional/Calculator/useCalculator'

import Display from '../Display'
import Keypad from '../Keypad'
import History from '../History'

import { Section, Separator, Surface } from './Styled'

const Calculator: FC = () => {
  const { answer, onEquals } = useCalculator()

  return (
    <Surface>
      <Section scale={1.8}>
        <Display answer={answer} />
        <hr />
        <Keypad onEquals={onEquals} />
      </Section>

      <Separator />

      <Section grow={1}>
        <History />
      </Section>
    </Surface>
  )
}

export default memo(Calculator)
