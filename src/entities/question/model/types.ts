export interface IQuestion {
  question: string
  options: Option[]
}

export interface IQuestionState {
  questions: IQuestion[]
  answers: IAnswer | null
}

interface Option {
  text: string
  isCorrect: boolean
}

export interface IAnswer {
  [key: string]: number | null
}
