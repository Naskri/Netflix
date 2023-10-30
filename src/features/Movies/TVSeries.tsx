import { MoviesRow } from './MoviesRow/MoviesRow'
import { TV_SERIES_API } from './MoviesServices/TVSeriesAPI'
import { useMovies } from './useMovies'

export const TVSeries = () => {
  const { data: popular } = useMovies(TV_SERIES_API.POPULAR_SERIES)
  const { data: action } = useMovies(TV_SERIES_API.ACTION_SERIES)
  const { data: top } = useMovies(TV_SERIES_API.TOP_RATED)
  const { data: mystery } = useMovies(TV_SERIES_API.MYSTERY_SERIES)
  const { data: kids } = useMovies(TV_SERIES_API.KIDS_SERIES)
  const { data: comedies } = useMovies(TV_SERIES_API.COMEDY_SERIES)
  return (
    <>
      <MoviesRow title="Popular on Netflix" data={popular} />
      <MoviesRow title="Action series" data={action} />
      <MoviesRow title="Top-rated" data={top} modifier="bigger" />
      <MoviesRow title="Comedies series" data={comedies} />
      <MoviesRow title="Kids series" data={kids} />
      <MoviesRow title="Mystery series" data={mystery} />
    </>
  )
}
