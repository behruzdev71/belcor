import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

import { loginSchema } from '../model/schema';
import { type ILogin } from '../model/types';

const LoginForm = () => {
    // const navigate = useNavigate()

    const { handleSubmit } = useForm<ILogin>({
        mode: "onChange",
        shouldFocusError: true,
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        </form>
    )
}

export default LoginForm