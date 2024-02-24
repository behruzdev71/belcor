import { Navigate, useNavigate } from "react-router-dom"
import { Button, Container, Title } from "@mantine/core"

import { Question, questionActions } from "@/entities/question"

import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { useAppDispatch } from "@/shared/hooks/useAppDispatch"

import styles from './styles.module.scss'
import { calcScore } from "@/shared/libs/calc-score"

const ResultPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { questions, answers } = useAppSelector(({ question }) => question)

    function restart() {
        dispatch(questionActions.setAnswers(null))
        navigate('/users-result', { replace: true })
    }

    if (!answers) {
        return <Navigate to='/' replace/>
    }

    const score = calcScore(questions, answers);

    return (
        <Container fluid className={styles.wrapper}>
            <Title order={1}>{score} правильных из {questions.length}</Title>
            {questions.map((question, idx) => (
                <Question
                    key={idx}
                    question={question}
                    selectedOptionIndex={answers[idx]}
                    isResult
                />
            ))}
            <Button className={styles.button} onClick={restart}>Cмотреть резултати пользователей!</Button>
        </Container>
    )
}

export default ResultPage