import { useQuery } from '@tanstack/react-query'
import { getAllUsersApi } from './index'

export const useGetAllUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getAllUsersApi,
  })
}
