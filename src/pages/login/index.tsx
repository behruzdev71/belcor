import { Flex, Title } from "@mantine/core"

import { LoginForm } from "@/features/login"

const LoginPage = () => {
    return (
        <Flex miw='100vw' mih='100vh' justify='center' align='center'>
            <Flex rowGap='md' justify='center' align='center' direction='column'>
                <Title order={1} fs='1.75rem'>
                    Вход
                </Title>
                <LoginForm />
            </Flex>
        </Flex>
    )
}

export default LoginPage