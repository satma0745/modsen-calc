import React, { PureComponent } from 'react'

import ErrorBoundary from '@components/calculator/shared/ErrorBoundary'

import Keypad, { Props } from './Pure'

class KeypadWithErrorBoundary extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <ErrorBoundary errorMessage="Keypad just crashed 😢">
        <Keypad {...this.props} />
      </ErrorBoundary>
    )
  }
}

export default KeypadWithErrorBoundary
