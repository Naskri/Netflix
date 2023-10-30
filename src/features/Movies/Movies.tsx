import { MoviesRow } from './MoviesRow/MoviesRow'
import { useMovies } from './useMovies'
import { MOVIES_API } from './MoviesServices/MoviesAPI'

export const Movies = () => {
  const { data: popular } = useMovies(MOVIES_API.POPULAR_MOVIES)
  return (
    <>
      <MoviesRow title="Popular on Netflix" data={popular} />
      <MoviesRow title="Popular on Netflix" data={popular} />
      <MoviesRow title="Popular on Netflix" data={popular} modifier="bigger" />
    </>
  )
}
