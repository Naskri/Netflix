import { useQuery } from 'react-query'
import { getCategoryMovies } from './MoviesServices'

type Category = {
  name: string
  url: string
}

export const useMovies = ({ name, url }: Category) => {
  const { data, isLoading } = useQuery({
    queryKey: [name],
    queryFn: () => getCategoryMovies(url),
  })

  return { data, isLoading } as const
}
