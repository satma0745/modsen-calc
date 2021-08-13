interface NotificationCallback<State> {
  (state: State): void
}

abstract class Store<State> {
  protected state: State
  protected readonly subs: NotificationCallback<State>[]

  protected constructor(initialState: State) {
    this.state = initialState
    this.subs = []
  }

  public subscribe(notify: NotificationCallback<State>): () => void {
    const unsubscribe = () => {
      const unsubIndex = this.subs.indexOf(notify)
      this.subs.splice(unsubIndex, 1)
    }

    this.subs.push(notify)

    return unsubscribe
  }

  protected onStateChange(): void {
    this.subs.forEach((notify) => notify(this.state))
  }
}

export default Store
