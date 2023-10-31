import { useQuery } from 'react-query'
import { getRandomMovie } from '../DashboardServices/DashboardServices'

export const useRandomMovie = () => {
  const {
    data: movie,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['randomMovie'],
    queryFn: getRandomMovie,
  })

  if (!movie) refetch()

  return { movie, isError, isLoading } as const
}
