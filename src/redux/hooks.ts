import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

import { inputsSelector } from './reducers/input'
import { historySelector } from './reducers/history'
import { RootState, Dispatch } from './store'

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector
const useInputsSelector = (): ReturnType<typeof inputsSelector> => typedUseSelector(inputsSelector)
const useHistorySelector = (): ReturnType<typeof historySelector> => typedUseSelector(historySelector)

const typedUseDispatch = (): Dispatch => useDispatch<Dispatch>()

export { useInputsSelector, useHistorySelector, typedUseDispatch as useDispatch }
