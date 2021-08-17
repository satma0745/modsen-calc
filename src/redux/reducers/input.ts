import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface InputState {
  inputs: string[]
}

const initialState: InputState = {
  inputs: [],
}

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    clearAll: (state) => {
      state.inputs = []
    },
    clearEntry: (state) => {
      if (state.inputs.length > 0) {
        state.inputs.pop()
      }
    },
    add: (state, action: PayloadAction<string>) => {
      const input = action.payload
      state.inputs.push(input)
    },
    addMany: (state, action: PayloadAction<string[]>) => {
      const inputs = action.payload
      state.inputs = state.inputs.concat(inputs)
    },
  },
})

const reducer = inputSlice.reducer

const { clearAll, clearEntry, add, addMany } = inputSlice.actions
const inputsSelector = (state: RootState): string[] => state.input.inputs

export default reducer
export { clearAll, clearEntry, add, addMany, inputsSelector }
