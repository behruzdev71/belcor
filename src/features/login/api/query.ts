import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { ILogin } from "../model/types.ts"
import { loginApi } from "./index.ts"
import { userSliceActions } from '@/entities/user/model/store.ts';

export const useLoginQuery = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

	return useMutation({
        mutationFn: (data: ILogin) => loginApi(data),
        onSuccess: (data) => {
            const access_token = data.token
			if (access_token) {
				sessionStorage.setItem('token', access_token)
                dispatch(userSliceActions.setUser(data))
				toast.success("Авторизация успешна")
                navigate('/')
			}
        }
    })
}
