const prettifySingle = (input: string) => {
  switch (input) {
    case '(':
      return ' ('
    case ') ':
      return ') '
    case '+':
    case '-':
    case '*':
    case '/':
      return ` ${input} `
    default:
      return input
  }
}

const prettifyMany = (input: string[]): string => {
  return input.map(prettifySingle).join('')
}

export default prettifyMany
