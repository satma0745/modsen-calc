import React, { PureComponent } from 'react'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

import Calculator from './Calculator'

class ErrorWrapper extends PureComponent {
  render(): JSX.Element {
    return (
      <ErrorBoundary errorMessage="Calculator just crashed 😢">
        <Calculator />
      </ErrorBoundary>
    )
  }
}

export default ErrorWrapper
