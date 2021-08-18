import { Input } from '../input'

import parse from './parser'
import validate from './validator'
import toPostfix from './notation'
import calculate from './calculator'

const processExpression = (input: Input): number | false => {
  const parsed = parse(input)

  const isValid = validate(parsed)
  if (!isValid) {
    return false
  }

  const postfix = toPostfix(parsed)
  const answer = calculate(postfix)

  return answer
}

export default processExpression
