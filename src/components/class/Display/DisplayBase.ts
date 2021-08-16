import { Component } from 'react'
import { subscribe } from '@core/inputs'

interface State {
  display: string
  unsubscribe: () => void
}

interface Props {
  answer: string | undefined
  content: string
}

abstract class DisplayBase extends Component<Props, State> {
  state: State = {
    display: '0',
    unsubscribe: () => {},
  }

  protected constructor(props: Props) {
    super(props)

    this.onNewInputs = this.onNewInputs.bind(this)
  }

  componentDidMount(): void {
    const unsubscribe = subscribe(this.onNewInputs)
    this.setState({ unsubscribe })
  }

  componentWillUnmount(): void {
    this.state.unsubscribe()
  }

  abstract onNewInputs(_: string[]): void

  abstract render(): JSX.Element
}

export default DisplayBase
