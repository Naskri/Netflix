import { Button } from '../../../UI/Button/Button'
import { BsPlay } from 'react-icons/bs'
import { AiOutlineArrowDown, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import styled from './MoviesItemDetails.module.css'
import { GENRES } from './helpers'
import { useModal } from '../../../../context/ModalContext'
import { useAddMovie } from '../../useAddMovie'
import { useUser } from '../../../Authentication/useUser'
import { useMyListMovies } from '../../useMyListMovies'
import { useDeleteMovie } from '../../useDeleteMovie'

type MoviesItemDetailsProps = {
  item: any
  isHovered: boolean
}

export const MoviesItemDetails = ({ item, isHovered }: MoviesItemDetailsProps) => {
  const { open } = useModal()
  const { addMovie } = useAddMovie()
  const { deleteMovie } = useDeleteMovie()
  const { user } = useUser()
  const { data: movies } = useMyListMovies()

  const isInsideList = movies?.some(
    (movie) => movie.original_title === item.original_title || movie.original_title === item.name
  )

  return (
    <div className={styled.details}>
      <img
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt={`${item.original_title || item.name}`}
        className={!isHovered ? styled.image : styled.details__image}
      />
      {isHovered && (
        <div className={styled.details__content}>
          <div className={styled.details__actions}>
            <Button modifier="details">
              <BsPlay />
            </Button>

            {!isInsideList && (
              <Button
                modifier="details"
                onClick={() =>
                  addMovie({
                    backdrop_path: item.backdrop_path,
                    original_title: item.original_title || item.name,
                    vote_average: item.vote_average,
                    overview: item.overview,
                    genre: '',
                    user_id: user?.id,
                  })
                }
              >
                <AiOutlinePlus />
              </Button>
            )}
            {isInsideList && (
              <Button
                modifier="details"
                onClick={() => deleteMovie(item.original_title || item.name)}
              >
                <AiOutlineMinus />
              </Button>
            )}
            <Button
              modifier="details"
              onClick={() => {
                open(item)
              }}
            >
              <AiOutlineArrowDown />
            </Button>
          </div>
          <h2 className={styled.details__title}>{item.original_title || item.name}</h2>
          <p className={styled.details__vote}>Averate vote: {item.vote_average} %</p>
          <div className={styled.details__categories}>
            {Array.isArray(item.genre_ids) ? (
              item.genre_ids.map((genre: keyof typeof GENRES) => (
                <p key={genre} className={styled.genre}>
                  {GENRES[genre]}
                </p>
              ))
            ) : (
              <p className={styled.genre}>{GENRES[Number(item.genre) as keyof typeof GENRES]}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
