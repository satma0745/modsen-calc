import { match } from 'ts-pattern'

type TokenKind = 'numeric' | 'non-numeric' | 'unsupported'
const nonNumerics = '+-*/()'.split('')
const numerics = '0123456789.'.split('')
const classify = (token: string): TokenKind => {
  if (numerics.includes(token)) {
    return 'numeric'
  }

  if (nonNumerics.includes(token)) {
    return 'non-numeric'
  }

  return 'unsupported'
}

const normalize = (tokens: string[]): string[] => {
  const normalized: string[] = []
  let isNumeric = false

  tokens.forEach((token) => {
    const tokenKind = classify(token)
    match(tokenKind)
      .with('non-numeric', () => {
        normalized.push(token)
        isNumeric = false
      })
      .with('numeric', () => {
        if (isNumeric) {
          normalized[normalized.length - 1] += token
        } else {
          normalized.push(token)
          isNumeric = true
        }
      })
      .with('unsupported', () => {
        throw new Error(`Unsupported token "${token}"`)
      })
      .exhaustive()
  })

  return normalized
}

export default normalize
