import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Input, InputToken } from '@core/input'
import { RootState } from '../store'

type State = Input
const initialState: State = []

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    clearAll: (input) => {
      input.splice(0)
    },
    clearEntry: (input) => {
      if (input.length === 0) {
        return
      }

      // if the last token is numeric: remove char from it's value, otherwise: remove whole token
      const last = input[input.length - 1]
      if (last.kind === 'numeric') {
        const value = last.value.slice(0, -1)

        // only if resulting value is still a valid number
        if (value.length === 0 || value === '-' || value === '.') {
          input.pop()
        } else {
          input[input.length - 1].value = value
        }
      } else {
        input.pop()
      }
    },
    changeSign: (input) => {
      if (input.length === 0) {
        return
      }

      const last = input[input.length - 1]
      if (last.kind !== 'numeric') {
        return
      }

      if (last.value.startsWith('-')) {
        last.value = last.value.substring(1)
      } else {
        last.value = '-' + last.value
      }
    },
    addNumeric: (input, action: PayloadAction<string>) => {
      const value = action.payload

      // if the previous token is numeric: append the new value to it, otherwise: create a new token
      const previousToken = input[input.length - 1]
      if (previousToken !== undefined && previousToken.kind === 'numeric') {
        input[input.length - 1].value += value
      } else {
        const token: InputToken = { kind: 'numeric', value }
        input.push(token)
      }
    },
    addNonNumeric: (input, action: PayloadAction<string>) => {
      const value = action.payload
      const token: InputToken = { kind: 'non-numeric', value }
      input.push(token)
    },
  },
})

const reducer = inputSlice.reducer

const { clearAll, clearEntry, changeSign, addNumeric, addNonNumeric } = inputSlice.actions
const inputSelector = (state: RootState): Input => state.input

export default reducer
export { clearAll, clearEntry, changeSign, addNumeric, addNonNumeric, inputSelector }
