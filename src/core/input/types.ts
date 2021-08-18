type InputToken = {
  kind: 'numeric' | 'non-numeric'
  value: string
}
type Input = InputToken[]

export { InputToken, Input }
