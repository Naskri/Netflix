import { Button } from '../../../UI/Button/Button'
import { BsPlay } from 'react-icons/bs'
import { AiOutlineArrowDown, AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

import styled from './MoviesItemDetails.module.css'
import { useModal } from '../../../../context/ModalContext'
import { useAddMovie } from '../../MoviesServices/useAddMovie'
import { useUser } from '../../../Authentication/useUser'
import { useMyListMovies } from '../../MoviesServices/useMyListMovies'
import { useDeleteMovie } from '../../MoviesServices/useDeleteMovie'
import { MoviesItemGenres } from './MoviesItemGenres/MoviesItemGenres'
import { useTranslation } from 'react-i18next'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { MovieSchemaType, MovieSupabaseType } from '../../MoviesServices/MoviesSchema'

type MoviesItemDetailsProps = {
  item: MovieSchemaType | MovieSupabaseType
  isHovered?: boolean
  type: 'movie' | 'serie'
}

export const MoviesItemDetails = ({ item, isHovered, type }: MoviesItemDetailsProps) => {
  const { open, close, isOpen } = useModal()
  const { addMovie } = useAddMovie()
  const { deleteMovie } = useDeleteMovie()
  const { user } = useUser()
  const { data: movies } = useMyListMovies()
  const { t } = useTranslation()

  const isInsideList = movies?.some(
    (movie) => movie.original_title === item.original_title || movie.original_title === item.name
  )

  return (
    <div className={`${styled.details} ${isHovered && styled['details--active']}`}>
      {isOpen && (
        <Button modifier="modal-close" onClick={close}>
          <AiOutlineClose />
        </Button>
      )}
      <img
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt={`${item.original_title || item.name}`}
        className={styled.details__image}
      />
      <div className={styled.details__content}>
        <div className={styled.details__actions}>
          <CustomLink path={`/watch/${item.custom_id || item.id}?type=${type}`} modifier="play">
            <BsPlay />
          </CustomLink>

          {!isInsideList && user && (
            <Button
              modifier="details"
              onClick={() =>
                addMovie({
                  backdrop_path: item.backdrop_path,
                  original_title: item.original_title || item.name,
                  vote_average: item.vote_average,
                  overview: item.overview,
                  genre_ids: JSON.stringify(item.genre_ids),
                  user_id: user.id,
                  type,
                  custom_id: item?.id ?? 0,
                })
              }
            >
              <AiOutlinePlus />
            </Button>
          )}
          {isInsideList && user && (
            <Button
              modifier="details"
              onClick={() => deleteMovie({ id: item?.custom_id, userId: user.id })}
            >
              <AiOutlineMinus />
            </Button>
          )}
          {!isOpen && (
            <Button
              modifier="details"
              onClick={() => {
                open(item)
              }}
            >
              <AiOutlineArrowDown />
            </Button>
          )}
        </div>
        <h2 className={styled.details__title}>{item.original_title || item.name}</h2>
        <p className={styled.details__vote}>
          {t('movies.vote')}: {item.vote_average} / 10
        </p>

        {isOpen ? (
          <div className={styled.details__overview}>
            <p className={styled.description}>{`${item.overview.slice(0, 300)}...`}</p>
            <MoviesItemGenres genres={item.genre_ids} />
          </div>
        ) : (
          <MoviesItemGenres genres={item.genre_ids} />
        )}
      </div>
    </div>
  )
}
