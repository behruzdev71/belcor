import { Box, Checkbox, Flex, MantineProvider, Title } from "@mantine/core"
import { IQuestion } from "../model/types"

interface QuestionProps {
    question: IQuestion,
    selectedOptionIndex: number | null;
    onChange?: (selectedIndex: number) => void;
    isResult?: boolean
}

const Question = ({ question, selectedOptionIndex, onChange, isResult }: QuestionProps) => {
    const getColor = (isCorrect: boolean) => {
        return isCorrect ? "green" : 'red'
    }

    return (
        <MantineProvider theme={{ cursorType: 'pointer' }}>
            <Box>
                <Title order={3} mb='md'>{question.question}</Title>
                <Flex direction='column' rowGap='sm'>
                    {question.options.map(({ text, isCorrect }, idx) => {
                        return (
                            <Checkbox
                                key={idx}
                                checked={idx === selectedOptionIndex}
                                indeterminate={isResult && !isCorrect && idx === selectedOptionIndex}
                                color={isResult ? getColor(isCorrect) : 'blue'}
                                label={text}
                                onChange={() => onChange && onChange(idx)}
                            />
                        )
                    })}
                </Flex>
            </Box>
        </MantineProvider>
    )
}

export default Question