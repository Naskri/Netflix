import { useModal } from '../../../context/ModalContext'
import { MoviesItemModal } from '../../Movies/MoviesItem/MoviesItemModal/MoviesItemModal'
import styled from './Modal.module.css'
import FocusTrap from 'focus-trap-react'

export const CustomModal = () => {
  const { modalContent, close } = useModal()

  return (
    <FocusTrap>
      <div className={styled.modal} onClick={close}>
        <div className={styled.modal__content} onClick={(e) => e.stopPropagation()}>
          <MoviesItemModal item={modalContent} />
        </div>
      </div>
    </FocusTrap>
  )
}
