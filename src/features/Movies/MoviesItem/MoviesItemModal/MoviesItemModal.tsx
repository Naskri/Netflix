import { BsPlay } from 'react-icons/bs'
import { Button } from '../../../UI/Button/Button'
import styled from './MoviesItemModal.module.css'
import { AiOutlinePlus, AiOutlineClose, AiOutlineMinus } from 'react-icons/ai'
import { GENRES } from '../MoviesItemDetails/helpers'
import { useModal } from '../../../../context/ModalContext'
import { useMyListMovies } from '../../useMyListMovies'
import { useAddMovie } from '../../useAddMovie'
import { useUser } from '../../../Authentication/useUser'
import { useDeleteMovie } from '../../useDeleteMovie'

export const MoviesItemModal = ({ item }: any) => {
  const { close } = useModal()
  const { deleteMovie } = useDeleteMovie()
  const { addMovie } = useAddMovie()

  const { user } = useUser()
  const { data: movies } = useMyListMovies()

  const isInsideList = movies?.some(
    (movie) => movie.original_title === item.original_title || movie.original_title === item.name
  )

  return (
    <div className={styled['movies-item']}>
      <Button modifier="modal-close" onClick={close}>
        <AiOutlineClose />
      </Button>
      <img
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt={`${item.original_title || item.name}`}
        className={styled.image}
      />
      <div className={styled['movies-item__content']}>
        <h2 className={styled['movies-item__title']}>{item.original_title || item.name}</h2>
        <div className={styled['movies-item__actions']}>
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
        </div>
        <p className={styled['movies-item__vote']}>Averate vote: {item.vote_average} %</p>
        <div className={styled['movies-item__overview']}>
          <p className={styled.description}>{`${item.overview.slice(0, 300)}...`}</p>
          <div className={styled['movies-item__genres']}>
            Genre:
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
      </div>
    </div>
  )
}
