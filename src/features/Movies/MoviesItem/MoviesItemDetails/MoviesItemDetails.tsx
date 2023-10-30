import { Button } from '../../../UI/Button/Button'
import { BsPlay } from 'react-icons/bs'
import { AiOutlineArrowDown, AiOutlinePlus } from 'react-icons/ai'

import styled from './MoviesItemDetails.module.css'
import { GENRES } from './helpers'

type MoviesItemDetailsProps = {
  item: any
  isHovered: boolean
}

export const MoviesItemDetails = ({ item, isHovered }: MoviesItemDetailsProps) => {
  return (
    <div className={styled.details}>
      <img
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt=""
        className={!isHovered ? styled.image : styled.details__image}
      />
      {isHovered && (
        <div className={styled.details__content}>
          <div className={styled.details__actions}>
            <Button modifier="details">
              <BsPlay />
            </Button>
            <Button modifier="details">
              <AiOutlinePlus />
            </Button>
            <Button modifier="details">
              <AiOutlineArrowDown />
            </Button>
          </div>
          <h2 className={styled.details__title}>{item.original_title || item.name}</h2>
          <p className={styled.details__vote}>Averate vote: {item.vote_average} %</p>
          <div className={styled.details__categories}>
            {item.genre_ids.map((genre: keyof typeof GENRES) => (
              <p key={genre} className={styled.genre}>
                {GENRES[genre]}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
