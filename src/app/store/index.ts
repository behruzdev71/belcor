import { configureStore } from '@reduxjs/toolkit'
import { questionSlice } from '@/entities/question'

export const store = configureStore({
  reducer: {
    question: questionSlice.reducer
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch