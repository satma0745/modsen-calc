import React, { FC, memo, useCallback, useState } from 'react'

import calculate from '@core/calculator'
import { Input, prettify } from '@core/input'

import { Section, Separator, Surface } from '@components/calculator/shared/calculator'
import Display from '@components/calculator/function/Display'
import History from '@components/calculator/function/History'
import Keypad from '@components/calculator/function/Keypad'

interface Props {
  input: Input
  showHistory: boolean
  history: string[]
  addHistoryRecord: (_: string) => void
  clearInput: (_: 'all' | 'entry') => void
  changeSign: () => void
  addNumericInput: (_: string) => void
  addNonNumericInput: (_: string) => void
}

const PureCalculator: FC<Props> = ({
  input,
  showHistory,
  history,
  addHistoryRecord,
  clearInput,
  changeSign,
  addNumericInput,
  addNonNumericInput,
  ...props
}) => {
  const [isError, setIsError] = useState(false)
  const resetError = useCallback(() => {
    setIsError(false)
  }, [setIsError])

  const onEquals = useCallback(() => {
    const answer = calculate(input)
    setIsError(answer === 'Error')

    const expression = prettify(input)
    const record = `${expression} = ${answer}`
    addHistoryRecord(record)

    clearInput('all')
    if (answer !== 'Error') {
      addNumericInput(answer.toString())
    }
  }, [input, setIsError, addHistoryRecord, clearInput, addNumericInput])

  return (
    <Surface {...props}>
      <Section scale={2}>
        <Display isError={isError} input={input} />
        <Separator kind="horizontal" />
        <Keypad
          resetError={resetError}
          clear={clearInput}
          onEquals={onEquals}
          changeSign={changeSign}
          addNumeric={addNumericInput}
          addNonNumeric={addNonNumericInput}
        />
      </Section>

      {showHistory && (
        <Section orientation="horizontal">
          <Separator kind="vertical" />

          <Section>
            <History history={history} />
          </Section>
        </Section>
      )}
    </Surface>
  )
}

export default memo(PureCalculator)
export { Props }
