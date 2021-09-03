import { Input } from '@core/input'

import parse from './parser'
import validate from './validator'
import toPostfix from './notation'
import calculate from './calculator'

const processExpression = (input: Input): number | 'Error' => {
  const parsed = parse(input)

  const isValid = validate(parsed)
  if (!isValid) {
    return 'Error'
  }

  const postfix = toPostfix(parsed)
  const answer = calculate(postfix)

  return isFinite(answer) ? answer : 'Error'
}

export default processExpression
