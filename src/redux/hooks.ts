import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

import { inputSelector } from './reducers/input'
import { historySelector } from './reducers/history'
import { RootState, Dispatch } from './store'

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector
const useInputSelector = (): ReturnType<typeof inputSelector> => typedUseSelector(inputSelector)
const useHistorySelector = (): ReturnType<typeof historySelector> => typedUseSelector(historySelector)

const typedUseDispatch = (): Dispatch => useDispatch<Dispatch>()

export { useInputSelector, useHistorySelector, typedUseDispatch as useDispatch }
