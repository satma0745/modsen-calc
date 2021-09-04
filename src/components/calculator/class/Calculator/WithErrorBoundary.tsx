import React, { PureComponent } from 'react'

import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

import Calculator, { Props } from './Pure'

class CalculatorWithErrorBoundary extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <ErrorBoundary errorMessage="Calculator just crashed 😢">
        <Calculator {...this.props} />
      </ErrorBoundary>
    )
  }
}

export default CalculatorWithErrorBoundary
