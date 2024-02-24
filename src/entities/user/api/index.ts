import clientApi from '@/shared/api/base-api'
import { IUser } from '..'

export const getAllUsersApi = async () => {
  const response = await clientApi.get<{ users: IUser[] }>('/users?limit=10')
  return response.data.users
}
