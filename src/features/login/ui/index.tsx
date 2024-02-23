import { useForm, Controller } from 'react-hook-form';
import { Button, Flex, Input, PasswordInput } from '@mantine/core';
import { yupResolver } from '@hookform/resolvers/yup'

import { loginSchema } from '../model/schema';
import { type ILogin } from '../model/types';
import { useLoginQuery } from '../api/query';

const LoginForm = () => {
    const { mutate, isPending } = useLoginQuery()

    const { handleSubmit, control, formState: { errors, isValid } } = useForm<ILogin>({
        mode: "onChange",
        shouldFocusError: true,
        defaultValues: {
            username: 'kminchelle',
            password: '0lelplR'
        },
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = (data: ILogin) => {
        mutate(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap="0.5rem">
                <Controller
                    control={control}
                    name="username"
                    render={({ field }) => (
                        <Input.Wrapper
                            label="Логин"
                            error={<>{errors.username?.message}</>}
                        >
                            <Input size="md" placeholder="username" {...field} />
                        </Input.Wrapper>
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <Input.Wrapper
                            label="Пароль"
                            error={<>{errors.password?.message}</>}
                        >
                            <PasswordInput size="md" placeholder="******" {...field} />
                        </Input.Wrapper>
                    )}
                />
            </Flex>

            <Button
                loading={isPending}
                disabled={!isValid}
                type={"submit"}
                mt={"1.5rem"}
                size="md"
                fullWidth
            >
                Войти
            </Button>
        </form>
    )
}

export default LoginForm