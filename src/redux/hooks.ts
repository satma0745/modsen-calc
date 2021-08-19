import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

import { themeSelector } from './reducers/appearance'
import { inputSelector } from './reducers/input'
import { historySelector } from './reducers/history'

import { RootState, Dispatch } from './store'

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector
const useThemeSelector = (): ReturnType<typeof themeSelector> => typedUseSelector(themeSelector)
const useInputSelector = (): ReturnType<typeof inputSelector> => typedUseSelector(inputSelector)
const useHistorySelector = (): ReturnType<typeof historySelector> => typedUseSelector(historySelector)

const typedUseDispatch = (): Dispatch => useDispatch<Dispatch>()

export { useThemeSelector, useInputSelector, useHistorySelector, typedUseDispatch as useDispatch }
