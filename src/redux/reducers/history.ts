import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@redux/store'

interface HistoryState {
  records: string[]
}

const initialState: HistoryState = {
  records: [],
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const record = action.payload
      state.records.push(record)
    },
  },
})

const reducer = historySlice.reducer

const { add } = historySlice.actions
const historySelector = (state: RootState): string[] => state.history.records

export default reducer
export { add, historySelector }
