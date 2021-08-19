import { match } from 'ts-pattern'
import { Input, InputToken } from './types'

const validateNumeric = (token: InputToken) => {
  if (token.value.length === 0) {
    return false
  }

  return !isNaN(Number(token.value))
}

const supportedNonNumerics = ['+', '-', '*', '/', '%', '(', ')']
const validateNonNumeric = (token: InputToken) => {
  return supportedNonNumerics.includes(token.value)
}

const validate = (input: Input): boolean => {
  for (const token of input) {
    const isValid = match(token)
      .with({ kind: 'numeric' }, validateNumeric)
      .with({ kind: 'non-numeric' }, validateNonNumeric)
      .exhaustive()

    if (!isValid) {
      return false
    }
  }

  return true
}

export default validate
