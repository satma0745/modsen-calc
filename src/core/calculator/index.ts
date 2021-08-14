import normalize from './normalizer'
import parse from './parser'
import validate from './validator'
import toPostfix from './notation'
import calculate from './calculator'

const processExpression = (inputs: string[]): number | false => {
  const normalized = normalize(inputs)
  const parsed = parse(normalized)

  const isValid = validate(parsed)
  if (!isValid) {
    return false
  }

  const postfix = toPostfix(parsed)
  const answer = calculate(postfix)

  return answer
}

export default processExpression
