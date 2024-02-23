import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from './types'

const initialState: IUserState = {
  user: null
}

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser(state, actions: PayloadAction<IUser>) {
      state.user = actions.payload
    }
  }
})

export const userSliceActions = userSlice.actions
