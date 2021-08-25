import React, { FC, memo } from 'react'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'
import Keypad, { Props } from './Pure'

const KeypadWithErrorBoundary: FC<Props> = (props) => (
  <ErrorBoundary errorMessage="Keypad just crashed 😢">
    <Keypad {...props} />
  </ErrorBoundary>
)

export default memo(KeypadWithErrorBoundary)
