import { configureStore } from '@reduxjs/toolkit'
import bridgeReducer from './bridgeSlice'
const store = configureStore({
  reducer: {
    bridge:bridgeReducer
  }
})

export default store