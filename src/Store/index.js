import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Store/Slices/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})