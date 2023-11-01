import { MoviesRow } from './MoviesRow/MoviesRow'
import { useMovies } from './MoviesServices/useMovies'
import { MOVIES_API } from './MoviesServices/MoviesAPI'
import { useTranslation } from 'react-i18next'

export const Movies = () => {
  const { data: popular } = useMovies(MOVIES_API.POPULAR_MOVIES)
  const { data: horror } = useMovies(MOVIES_API.HORROR_MOVIES)
  const { data: upcoming } = useMovies(MOVIES_API.UPCOMING)
  const { data: comedies } = useMovies(MOVIES_API.COMEDIES_MOVIES)
  const { data: actions } = useMovies(MOVIES_API.ACTION_MOVIES)
  const { data: mystery } = useMovies(MOVIES_API.MYSTERY_MOVIES)

  const { t } = useTranslation()

  return (
    <>
      <MoviesRow title={t('movies.popular')} data={popular?.results} type="movie" />
      <MoviesRow title={t('movies.horror')} data={horror?.results} type="movie" />
      <MoviesRow
        title={t('movies.upcoming')}
        data={upcoming?.results}
        modifier="bigger"
        type="movie"
      />
      <MoviesRow title={t('movies.comedies')} data={comedies?.results} type="movie" />
      <MoviesRow title={t('movies.action')} data={actions?.results} type="movie" />
      <MoviesRow title={t('movies.mystery')} data={mystery?.results} type="movie" />
    </>
  )
}
