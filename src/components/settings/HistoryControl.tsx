import React, { FC, memo, useCallback } from 'react'

import { toggleHistory } from '@redux/reducers/appearance'
import { clearHistory } from '@redux/reducers/history'
import { useAppearanceSelector, useDispatch } from '@redux/hooks'

const HistoryControl: FC = () => {
  const { showHistory } = useAppearanceSelector()
  const dispatch = useDispatch()

  const onToggleHistory = useCallback(() => {
    dispatch(toggleHistory())
  }, [dispatch])

  const onClearHistory = useCallback(() => {
    dispatch(clearHistory())
  }, [dispatch])

  return (
    <div>
      <span>History:</span>
      <button onClick={onToggleHistory}>{showHistory ? 'Hide' : 'Show'}</button>
      <button onClick={onClearHistory}>Clear</button>
    </div>
  )
}

export default memo(HistoryControl)
