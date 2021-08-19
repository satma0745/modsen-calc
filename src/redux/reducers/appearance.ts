import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type Theme = 'light' | 'dark'
type State = {
  theme: Theme
}

const initialState: State = {
  theme: 'light',
}

const appearanceSlice = createSlice({
  name: 'appearance',
  initialState,
  reducers: {
    changeTheme: (appearance, action: PayloadAction<Theme>) => {
      appearance.theme = action.payload
    },
  },
})

const reducer = appearanceSlice.reducer

const { changeTheme } = appearanceSlice.actions
const themeSelector = (state: RootState): Theme => state.appearance.theme

export default reducer
export { changeTheme, themeSelector }
