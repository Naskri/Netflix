import { useQuery } from 'react-query'
import { getMovies } from './MoviesServices'
import { useUser } from '../../Authentication/useUser'

export const useMyListMovies = () => {
  const { user } = useUser()
  const { data, isLoading } = useQuery({
    queryKey: ['movies', user?.id],
    queryFn: () => getMovies(user?.id),
  })

  return { data, isLoading } as const
}
