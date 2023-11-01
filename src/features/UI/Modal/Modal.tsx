import { useModal } from '../../../context/ModalContext'
import { MoviesItemDetails } from '../../Movies/MoviesItem/MoviesItemDetails/MoviesItemDetails'
import styled from './Modal.module.css'
import FocusTrap from 'focus-trap-react'

export const CustomModal = () => {
  const { modalContent, close } = useModal()

  return (
    <FocusTrap>
      {modalContent && (
        <div className={styled.modal} onClick={close}>
          <div className={styled.modal__content} onClick={(e) => e.stopPropagation()}>
            <MoviesItemDetails item={modalContent} type="movie" />
          </div>
        </div>
      )}
    </FocusTrap>
  )
}
