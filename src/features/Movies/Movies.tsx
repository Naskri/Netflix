import { MoviesRow } from './MoviesRow/MoviesRow'
import { useMovies } from './useMovies'
import { MOVIES_API } from './MoviesServices/MoviesAPI'

export const Movies = () => {
  const { data: popular } = useMovies(MOVIES_API.POPULAR_MOVIES)
  const { data: horror } = useMovies(MOVIES_API.HORROR_MOVIES)
  const { data: upcoming } = useMovies(MOVIES_API.UPCOMING)
  const { data: comedies } = useMovies(MOVIES_API.COMEDIES_MOVIES)
  const { data: actions } = useMovies(MOVIES_API.ACTION_MOVIES)
  const { data: mystery } = useMovies(MOVIES_API.MYSTERY_MOVIES)
  return (
    <>
      <MoviesRow title="Popular on Netflix" data={popular} />
      <MoviesRow title="Horror Movies" data={horror} />
      <MoviesRow title="Upcoming" data={upcoming} modifier="bigger" />
      <MoviesRow title="Comedies movies" data={comedies} />
      <MoviesRow title="Action movies" data={actions} />
      <MoviesRow title="Mystery movies" data={mystery} />
    </>
  )
}
