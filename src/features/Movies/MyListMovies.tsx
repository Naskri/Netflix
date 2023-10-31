import { MoviesRow } from './MoviesRow/MoviesRow'
import { useMyListMovies } from './MoviesServices/useMyListMovies'
import { useTranslation } from 'react-i18next'

export const MyListMovies = () => {
  const { data: movies } = useMyListMovies()
  const { t } = useTranslation()

  return <MoviesRow data={movies} title={t('movies.list')} /> || null
}
