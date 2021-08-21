import React, { FC, memo, useCallback } from 'react'

import { toggleHistory } from '@redux/reducers/appearance'
import { clearHistory } from '@redux/reducers/history'
import { useAppearanceSelector, useDispatch } from '@redux/hooks'

import { Section, Button } from './shared'

const HistorySection: FC = () => {
  const { showHistory: history } = useAppearanceSelector()
  const dispatch = useDispatch()

  const onToggleHistory = useCallback(() => {
    dispatch(toggleHistory())
  }, [dispatch])

  const onClearHistory = useCallback(() => {
    dispatch(clearHistory())
  }, [dispatch])

  return (
    <Section title="History">
      <p>Calculator stores calculation history</p>

      <p>
        Currently history is {history ? 'visible' : 'hidden'} and You can {history ? 'hide' : 'show'} it:
        <Button onClick={onToggleHistory}>{history ? 'Hide' : 'Show'} history</Button>
      </p>

      <p>
        You can also clear history:
        <Button onClick={onClearHistory}>Clear</Button>
      </p>
    </Section>
  )
}

export default memo(HistorySection)
