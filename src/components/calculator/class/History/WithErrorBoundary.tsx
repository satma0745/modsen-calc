import React, { PureComponent } from 'react'
import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'
import History, { Props } from './Pure'

class HistoryWithErrorBoundary extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <ErrorBoundary errorMessage="History just crashed 😢">
        <History {...this.props} />
      </ErrorBoundary>
    )
  }
}

export default HistoryWithErrorBoundary
