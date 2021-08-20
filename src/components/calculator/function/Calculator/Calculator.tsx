import React, { FC, memo } from 'react'

import { useAppearanceSelector } from '@redux/hooks'

import { Section, Separator, Surface } from '@components/calculator/shared/calculator'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

import Display from '../Display'
import Keypad from '../Keypad'
import History from '../History'

import useCalculator from './useCalculator'

const Calculator: FC = () => {
  const { showHistory } = useAppearanceSelector()
  const { isError, onEquals, resetError } = useCalculator()

  return (
    <Surface>
      <Section scale={2}>
        <Display isError={isError} />
        <Separator kind="horizontal" />
        <Keypad onEquals={onEquals} onKeyPress={resetError} />
      </Section>

      {showHistory && (
        <Section orientation="horizontal">
          <Separator kind="vertical" />

          <Section>
            <History />
          </Section>
        </Section>
      )}
    </Surface>
  )
}

const ErrorWrapper: FC = () => (
  <ErrorBoundary errorMessage="Calculator just crashed 😢">
    <Calculator />
  </ErrorBoundary>
)

export default memo(ErrorWrapper)
