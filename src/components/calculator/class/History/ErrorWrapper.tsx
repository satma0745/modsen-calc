import React, { PureComponent } from 'react'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

import History from './History'

class ErrorWrapper extends PureComponent {
  render(): JSX.Element {
    return (
      <ErrorBoundary errorMessage="History just crashed 😢">
        <History />
      </ErrorBoundary>
    )
  }
}

export default ErrorWrapper
