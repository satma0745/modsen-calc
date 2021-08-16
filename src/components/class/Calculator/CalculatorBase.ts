import { Component } from 'react'
import { handler, subscribe } from '@core/inputs'

interface State {
  display: string
  answer: string | undefined
  history: string[]
  onInput: (_: string) => void
  inputs: string[]
  unsubscribe: () => void
}

type Props = Record<string, never>

abstract class CalculatorBase extends Component<Props, State> {
  state: State = {
    display: '',
    answer: undefined,
    history: [],
    onInput: () => {},
    inputs: [],
    unsubscribe: () => {},
  }

  protected constructor(props: Props) {
    super(props)

    this.onEquals = this.onEquals.bind(this)

    this.state.onInput = handler(this.onEquals)
  }

  componentDidMount(): void {
    const unsubscribe = subscribe((inputs) => this.setState({ inputs }))
    this.setState({ unsubscribe })
  }

  componentWillUnmount(): void {
    this.state.unsubscribe()
  }

  abstract onEquals(): number | false

  abstract render(): JSX.Element
}

export default CalculatorBase
