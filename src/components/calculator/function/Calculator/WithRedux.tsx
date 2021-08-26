import React, { FC, memo, useMemo } from 'react'
import { match } from 'ts-pattern'

import { addNonNumeric, addNumeric, changeSign, clearAll, clearEntry } from '@redux/reducers/input'
import { addRecord } from '@redux/reducers/history'
import { useAppearanceSelector, useDispatch, useHistorySelector, useInputSelector } from '@redux/hooks'

import Calculator from './WithErrorBoundary'

const CalculatorWithRedux: FC = (props) => {
  const input = useInputSelector()
  const { showHistory } = useAppearanceSelector()
  const history = useHistorySelector()

  const dispatch = useDispatch()
  const actions = useMemo(
    () => ({
      addHistoryRecord: (record: string) => dispatch(addRecord(record)),
      clearInput: (kind: 'all' | 'entry') => {
        match(kind)
          .with('all', () => dispatch(clearAll()))
          .with('entry', () => dispatch(clearEntry()))
          .exhaustive()
      },
      changeSign: () => dispatch(changeSign()),
      addNumericInput: (input: string) => dispatch(addNumeric(input)),
      addNonNumericInput: (input: string) => dispatch(addNonNumeric(input)),
    }),
    [dispatch],
  )

  return <Calculator input={input} history={history} showHistory={showHistory} {...actions} {...props} />
}

export default memo(CalculatorWithRedux)
