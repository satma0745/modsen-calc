interface Theme {
  application: {
    background: string
    color: string
  }
  header: {
    background: string
    color: string
  }
  page: {
    background: string
    color: string
  }
  calculator: {
    button: {
      borderColor: string
      background: string
      color: string
    }
    borderColor: string
  }
}

type ThemeKind = 'light' | 'dark'

export { Theme, ThemeKind }
