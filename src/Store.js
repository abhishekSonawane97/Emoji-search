import { configureStore } from '@reduxjs/toolkit'
import AiSlice from './Slices/Ai_slice'

export const store = configureStore({
  reducer: {
    AiSlice
  },
})