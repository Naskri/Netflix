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
      <MoviesItemDetails item={item} isHovered={isHovered} />
    </div>
  )
}
