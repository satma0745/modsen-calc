const mockScrollIntoView = (): void => {
  Element.prototype.scrollIntoView = jest.fn()
}

export { mockScrollIntoView }
