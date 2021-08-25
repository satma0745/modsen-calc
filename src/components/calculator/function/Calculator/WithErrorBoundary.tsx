import React, { FC, memo } from 'react'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'
import Calculator, { Props } from './Pure'

const CalculatorWithErrorBoundary: FC<Props> = (props) => (
  <ErrorBoundary errorMessage="Calculator just crashed 😢">
    <Calculator {...props} />
  </ErrorBoundary>
)

export default memo(CalculatorWithErrorBoundary)
