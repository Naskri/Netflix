import { useQuery } from 'react-query'
import { getAvatars } from '../apiService'

export const useAvatars = () => {
  const { data: avatars, isLoading } = useQuery({
    queryKey: ['avatars'],
    queryFn: getAvatars,
  })

  return { avatars, isLoading } as const
}
