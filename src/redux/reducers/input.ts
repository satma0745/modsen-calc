import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Input, InputToken } from '@core/input'
import { RootState } from '../store'

interface InputState {
  inputs: Input
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
      if (state.inputs.length === 0) {
        return
      }

      // if the last token is numeric: remove char from it's value, otherwise: remove whole token
      const last = state.inputs[state.inputs.length - 1]
      if (last.kind === 'numeric') {
        const value = last.value.slice(0, -1)

        // only if resulting value is still a valid number
        if (value.length === 0 || value === '-' || value === '.') {
          state.inputs.pop()
        } else {
          state.inputs[state.inputs.length - 1].value = value
        }
      } else {
        state.inputs.pop()
      }
    },
    changeSign: (state) => {
      if (state.inputs.length === 0) {
        return
      }

      const last = state.inputs[state.inputs.length - 1]
      if (last.kind !== 'numeric') {
        return
      }

      if (last.value.startsWith('-')) {
        last.value = last.value.substring(1)
      } else {
        last.value = '-' + last.value
      }
    },
    addNumeric: (state, action: PayloadAction<string>) => {
      const value = action.payload

      // if the previous token is numeric: append the new value to it, otherwise: create a new token
      const previousToken = state.inputs[state.inputs.length - 1]
      if (previousToken !== undefined && previousToken.kind === 'numeric') {
        state.inputs[state.inputs.length - 1].value += value
      } else {
        const token: InputToken = { kind: 'numeric', value }
        state.inputs.push(token)
      }
    },
    addNonNumeric: (state, action: PayloadAction<string>) => {
      const value = action.payload
      const token: InputToken = { kind: 'non-numeric', value }
      state.inputs.push(token)
    },
  },
})

const reducer = inputSlice.reducer

const { clearAll, clearEntry, changeSign, addNumeric, addNonNumeric } = inputSlice.actions
const inputsSelector = (state: RootState): Input => state.input.inputs

export default reducer
export { clearAll, clearEntry, changeSign, addNumeric, addNonNumeric, inputsSelector }
