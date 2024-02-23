import { useQuery } from '@tanstack/react-query'
import { getMeApi } from '../api/get-me'

export const useGetMeQuery = () => {
  return useQuery({
    queryKey: ['/auth/me'],
    queryFn: getMeApi,
  })
}
