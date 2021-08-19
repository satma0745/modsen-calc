interface Theme {
  title: string
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

export default Theme
