import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { questions } from '@/shared/constants/questions'
import { IQuestionState, IAnswer } from './types'

const initialState: IQuestionState = {
  questions: questions,
  answers: null
}

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setAnswers(state, action: PayloadAction<IAnswer | null>) {
      state.answers = action.payload
    }
  }
})

export const questionActions = questionSlice.actions

export { questionSlice }
