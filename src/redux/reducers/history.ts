import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type State = string[]
const initialState: State = []

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addRecord: (history, action: PayloadAction<string>) => {
      const record = action.payload
      history.push(record)
    },
  },
})

const reducer = historySlice.reducer

const { addRecord } = historySlice.actions
const historySelector = (state: RootState): string[] => state.history

export default reducer
export { addRecord, historySelector }
