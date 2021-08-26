import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { appearanceReducer, historyReducer, inputReducer } from '@redux/reducers'

const ReduxStoreProviderMock: FC = ({ children }) => {
  const store = configureStore({
    reducer: {
      appearance: appearanceReducer,
      input: inputReducer,
      history: historyReducer,
    },
  })

  return <Provider store={store}>{children}</Provider>
}

export default ReduxStoreProviderMock
