import React, { FC, memo } from 'react'

import Display from '../Display'
import Keypad from '../Keypad'
import History from '../History'

import { Section, Separator, Surface } from './Styled'

const Calculator: FC = () => (
  <Surface>
    <Section scale={1.8}>
      <Display />
      <hr />
      <Keypad />
    </Section>

    <Separator />

    <Section grow={1}>
      <History />
    </Section>
  </Surface>
)

export default memo(Calculator)
