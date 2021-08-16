import { makeAutoObservable } from 'mobx'
import { __, match } from 'ts-pattern'

import calculate from '@core/calculator'
import prettify from './prettify'

class Calculator {
  expression: string[] = []
  history: string[] = []
  answer: string | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  get prettyExpression() {
    return prettify(this.expression)
  }

  get display() {
    return match<[number, string | undefined]>([this.expression.length, this.answer])
      .with([0, undefined], () => '0')
      .with([0, __], ([_, answer]) => answer as string)
      .otherwise(() => this.prettyExpression)
  }

  onInput(input: string) {
    match(input)
      .with('C', () => (this.expression = []))
      .with('CE', () => this.expression.pop())
      .with('=', () => this.onEquals())
      .otherwise(() => this.expression.push(input))
  }

  private onEquals() {
    const calculated = calculate(this.expression)
    const expression = this.prettyExpression
    this.expression = []

    if (calculated !== false) {
      this.answer = calculated.toString()
      this.expression = Calculator.answerToInput(calculated)
    } else {
      this.answer = 'Error'
    }

    const record = `${expression} = ${this.answer}`
    this.history.push(record)
  }

  private static answerToInput(answer: number) {
    return (answer >= 0 ? answer.toString() : `0-${Math.abs(answer)}`).split('')
  }
}

const calculator = new Calculator()

export default calculator
