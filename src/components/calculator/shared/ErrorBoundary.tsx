import React, { Component } from 'react'

type Props = {
  errorMessage: string
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  }

  constructor(props: Props) {
    super(props)
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render(): JSX.Element {
    return this.state.hasError ? <p>{this.props.errorMessage}</p> : <>{this.props.children}</>
  }
}

export default ErrorBoundary
