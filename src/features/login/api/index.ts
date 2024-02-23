import { IUser } from '@/entities/user/index.ts'

import clientApi from '@/shared/api/base-api.ts'

import { ILogin } from '../model/types.ts'

export const loginApi = async (data: ILogin): Promise<IUser> => {
  const response = await clientApi.post<IUser>('/auth/login',  data)
  return response.data
}
