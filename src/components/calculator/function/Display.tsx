import React, { FC, memo, useMemo } from 'react'
import { __, match } from 'ts-pattern'

import { prettify } from '@core/input'
import { useInputSelector } from '@redux/hooks'

import { Container } from '@components/calculator/shared/display'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

interface Props {
  isError: boolean
}

const Display: FC<Props> = ({ isError }) => {
  const inputs = useInputSelector()

  const display = useMemo(
    () =>
      match<[number, boolean]>([inputs.length, isError])
        .with([0, true], () => 'Error')
        .with([0, false], () => '0')
        .with([__, __], () => prettify(inputs))
        .exhaustive(),
    [inputs, isError],
  )

  return <Container>{display}</Container>
}

const ErrorWrapper: FC<Props> = (props) => (
  <ErrorBoundary errorMessage="Display just crushed 😢">
    <Display {...props} />
  </ErrorBoundary>
)

export default memo(ErrorWrapper)
