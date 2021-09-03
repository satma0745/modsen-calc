import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ThemeKind } from '@core/theming'
import { RootState } from '@redux/store'

type State = {
  theme: ThemeKind
  showHistory: boolean
}

const initialState: State = {
  theme: 'light',
  showHistory: true,
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
    toggleHistory: (appearance) => {
      appearance.showHistory = !appearance.showHistory
    },
  },
})

const reducer = appearanceSlice.reducer

const { hydrate, changeTheme, toggleHistory } = appearanceSlice.actions
const appearanceSelector = (state: RootState): State => state.appearance

export default reducer
export { State as AppearanceState, hydrate, changeTheme, toggleHistory, appearanceSelector }
