import { GENRES } from '../helpers'
import styled from './MoviesItemGenres.module.css'
import { useTranslation } from 'react-i18next'

type MoviesItemGenresProps = {
  genres: (keyof typeof GENRES)[]
}

export const MoviesItemGenres = ({ genres }: MoviesItemGenresProps) => {
  const validGenres = Array.isArray(genres) ? genres : JSON.parse(genres)
  const { t } = useTranslation()

  return (
    <div className={styled.genres}>
      {validGenres.map((genre: keyof typeof GENRES) => (
        <p key={genre} className={styled.genre}>
          {t(GENRES[genre])}
        </p>
      ))}
    </div>
  )
}
