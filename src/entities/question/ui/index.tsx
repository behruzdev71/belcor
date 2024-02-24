import { Box, Checkbox, Flex, MantineProvider, Title } from "@mantine/core"
import { IQuestion } from "../model/types"

interface QuestionProps {
    question: IQuestion,
    selectedOptionIndex: number | null;
    onChange: (selectedIndex: number) => void;
}

const Question = ({ question, selectedOptionIndex, onChange }: QuestionProps) => {
    return (
        <MantineProvider theme={{ cursorType: 'pointer' }}>
            <Box>
                <Title order={3} mb='md'>{question.question}</Title>
                <Flex direction='column' rowGap='sm'>
                    {question.options.map(({ text }, idx) => (
                        <Checkbox
                            key={idx}
                            checked={idx === selectedOptionIndex}
                            color="blue"
                            label={text}
                            onChange={() => onChange(idx)} />
                    ))}
                </Flex>
            </Box>
        </MantineProvider>
    )
}

export default Question