import { useQuery } from 'react-query'
import { getRandomMovie } from '../DashboardServices/DashboardServices'

export const useRandomMovie = () => {
  const {
    data: movie,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['randomMovie'],
    queryFn: getRandomMovie,
    retry: false,
    refetchOnWindowFocus: false,
  })

  return { movie, isError, isLoading } as const
}
