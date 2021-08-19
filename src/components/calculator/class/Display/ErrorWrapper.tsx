import React, { PureComponent } from 'react'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

import Display, { Props } from './Display'

class ErrorWrapper extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <ErrorBoundary errorMessage="Display just crashed 😢">
        <Display {...this.props} />
      </ErrorBoundary>
    )
  }
}

export default ErrorWrapper
