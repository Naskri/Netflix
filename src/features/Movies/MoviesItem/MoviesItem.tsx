import { useState } from 'react'
import styled from './MoviesItem.module.css'
import { MoviesItemDetails } from './MoviesItemDetails/MoviesItemDetails'

export const MoviesItem = (item: any) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={styled.item}
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
        <MoviesItemDetails item={item} isHovered={isHovered} />
      )}
    </div>
  )
}
