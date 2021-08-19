import React, { FC, memo, useMemo } from 'react'
import { __, match } from 'ts-pattern'

import { prettify } from '@core/input'
import { useInputSelector } from '@redux/hooks'

import { Container } from '@components/calculator/shared/display'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

interface Props {
  answer: string | undefined
}

const Display: FC<Props> = ({ answer }) => {
  const inputs = useInputSelector()

  const display = useMemo(() => {
    return match<[number, string | undefined]>([inputs.length, answer])
      .with([0, undefined], () => '0')
      .with([0, __.string], ([_, answer]) => answer)
      .otherwise(() => prettify(inputs))
  }, [inputs, answer])

  return <Container>{display}</Container>
}

const ErrorWrapper: FC<Props> = (props) => (
  <ErrorBoundary errorMessage="Display just crushed 😢">
    <Display {...props} />
  </ErrorBoundary>
)

export default memo(ErrorWrapper)
