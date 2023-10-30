import { MoviesRow } from './MoviesRow/MoviesRow'
import { useMyListMovies } from './useMyListMovies'

export const MyListMovies = () => {
  const { data: movies } = useMyListMovies()

  return <MoviesRow data={movies} title="Your list" /> || null
}
