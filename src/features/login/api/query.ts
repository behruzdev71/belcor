import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { ILogin } from "../model/types.ts"
import { loginApi } from "./index.ts"

export const useLoginQuery = () => {
	return useMutation({
        mutationFn: (data: ILogin) => loginApi(data),
        onSuccess: (data) => {
            const access_token = data.token
			if (access_token) {
				localStorage.set('token', access_token)
				toast.success("Авторизация успешна")
			}
        }
    })
}
