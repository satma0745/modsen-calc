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

export default inputs
