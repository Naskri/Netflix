import { useState } from 'react'
import styled from './MoviesItem.module.css'
import { MoviesItemDetails } from './MoviesItemDetails/MoviesItemDetails'
import { MovieSchemaType, MovieSupabaseType } from '../MoviesServices/MoviesSchema'

type MoviesItemProps = {
  item: MovieSchemaType | MovieSupabaseType
  type: 'movie' | 'serie'
}

export const MoviesItem = ({ item, type }: MoviesItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={styled.movie}
      onClick={() => setIsHovered((prev) => !prev)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <img
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={`${item.original_title || item.name}`}
          className={!isHovered ? styled.image : styled.details__image}
        />
      ) : (
        <MoviesItemDetails item={item} isHovered={isHovered} type={type} />
      )}
    </div>
  )
}
