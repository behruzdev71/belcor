import { IAnswer, IQuestion } from "@/entities/question/model/types";

export function calcScore(questions: IQuestion[], userAnswers: IAnswer): number {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const userAnswerIndex = userAnswers[i];
        
        if (userAnswerIndex !== null && question.options[userAnswerIndex].isCorrect) {
            score++;
        }
    }
    return score;
}