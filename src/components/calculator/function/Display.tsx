import React, { FC, memo, useMemo } from 'react'
import { __, match } from 'ts-pattern'

import { Input, prettify } from '@core/input'

import { Container } from '@components/calculator/shared/display'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

interface Props {
  isError: boolean
  input: Input
}

const PureDisplay: FC<Props> = ({ isError, input }) => {
  const display = useMemo(
    () =>
      match<[number, boolean]>([input.length, isError])
        .with([0, true], () => 'Error')
        .with([0, false], () => '0')
        .with([__, __], () => prettify(input))
        .exhaustive(),
    [input, isError],
  )

  return <Container data-testid="display">{display}</Container>
}
const PureDisplayMemo = memo(PureDisplay)

const ErrorWrapper: FC<Props> = (props) => (
  <ErrorBoundary errorMessage="Display just crushed 😢">
    <PureDisplayMemo {...props} />
  </ErrorBoundary>
)

export default memo(ErrorWrapper)
