import { configureStore } from '@reduxjs/toolkit'
import { historyReducer, inputReducer } from './reducers'

const store = configureStore({
  reducer: {
    input: inputReducer,
    history: historyReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type Dispatch = typeof store.dispatch

export default store
export { RootState, Dispatch }
