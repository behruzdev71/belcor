import clientApi from '@/shared/api/base-api.ts'

import { ILogin } from '../model/types.ts'

export const loginApi = async (data: ILogin): Promise<{token: string}> => {
  const response = await clientApi.post<{token: string}>('/auth/login',  data)
  return response.data
}
