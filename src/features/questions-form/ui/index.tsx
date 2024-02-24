
import { Box, Button } from '@mantine/core'
import { Controller, useForm } from 'react-hook-form'

import { Question } from '@/entities/question'
import { questionActions } from '@/entities/question/model/slice'

import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'

import styles from './styles.module.scss'
import { IQuestionsFormData } from '../model/types'
import { useNavigate } from 'react-router-dom'

const QuestionsForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const questions = useAppSelector(({ question }) => question.questions)
    const { control, handleSubmit, formState: { isSubmitting } } = useForm<IQuestionsFormData>();

    const onSubmit = (data: IQuestionsFormData) => {
        dispatch(questionActions.setAnswers(data))
        navigate('/result')
    };

    return (
        <Box component="form" className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            {questions.map((question, idx) => (
                <Controller
                    name={`${idx}`}
                    key={idx}
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                        <Question
                            question={question}
                            selectedOptionIndex={field.value}
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            ))}
            <Button type="submit" className={styles.button} disabled={isSubmitting}>Проверить</Button>
        </Box>
    )
}

export default QuestionsForm