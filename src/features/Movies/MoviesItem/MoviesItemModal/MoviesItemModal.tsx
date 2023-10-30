import { BsPlay } from 'react-icons/bs'
import { Button } from '../../../UI/Button/Button'
import styled from './MoviesItemModal.module.css'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { GENRES } from '../MoviesItemDetails/helpers'
import { useModal } from '../../../../context/ModalContext'

export const MoviesItemModal = ({ item }: any) => {
  const { close } = useModal()

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
          <Button modifier="details">
            <AiOutlinePlus />
          </Button>
        </div>
        <p className={styled['movies-item__vote']}>Averate vote: {item.vote_average} %</p>
        <div className={styled['movies-item__overview']}>
          <p className={styled.description}>{item.overview}</p>
          <div className={styled['movies-item__genres']}>
            Genre:
            {item.genre_ids.map((genre: keyof typeof GENRES) => (
              <span key={genre} className={styled.genre}>
                {GENRES[genre]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
