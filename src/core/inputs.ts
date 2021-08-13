import Store from './Store'

class Inputs extends Store<string[]> {
  constructor() {
    super([])
  }

  public push(input: string) {
    this.state.push(input)
    this.onStateChange()
  }

  public pop() {
    const input = this.state.pop()
    this.onStateChange()
    return input
  }

  public clear() {
    this.state = []
    this.onStateChange()
  }
}

const inputs = new Inputs()

const push = inputs.push.bind(inputs)
const pop = inputs.pop.bind(inputs)
const clear = inputs.clear.bind(inputs)
const subscribe = inputs.subscribe.bind(inputs)

export { push, pop, clear, subscribe }
