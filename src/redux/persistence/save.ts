import { EnhancedStore } from '@reduxjs/toolkit'

import { RootState } from '@redux/store'

const saveAppearance = (state: RootState): void => {
  const appearance = state.appearance
  const json = JSON.stringify(appearance)
  localStorage.setItem('appearance', json)
}

const configureAutoSave = (store: EnhancedStore<RootState>): void => {
  store.subscribe(() => {
    const state = store.getState()
    saveAppearance(state)
  })
}

export { configureAutoSave }
