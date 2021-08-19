import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ThemeKind } from '@core/theming'
import { RootState } from '../store'

type State = {
  theme: ThemeKind
}

const initialState: State = {
  theme: 'light',
}

const appearanceSlice = createSlice({
  name: 'appearance',
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload
    },
    changeTheme: (appearance, action: PayloadAction<ThemeKind>) => {
      appearance.theme = action.payload
    },
  },
})

const reducer = appearanceSlice.reducer

const { hydrate, changeTheme } = appearanceSlice.actions
const themeSelector = (state: RootState): ThemeKind => state.appearance.theme

export default reducer
export { State as AppearanceState, hydrate, changeTheme, themeSelector }
