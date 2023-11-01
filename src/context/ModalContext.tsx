import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { MovieSchemaType, MovieSupabaseType } from '../features/Movies/MoviesServices/MoviesSchema'

type ModalContextState = {
  isOpen: boolean
  open: (modalContent: any) => void
  close: () => void
  modalContent: MovieSchemaType | MovieSupabaseType | null
}

export const ModalContext = createContext<ModalContextState | null>(null)

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<MovieSchemaType | MovieSupabaseType | null>(null)

  const open = (modalContent: MovieSchemaType | MovieSupabaseType) => {
    setIsOpen(true)
    setModalContent(modalContent)
  }

  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.body.toggleAttribute('data-modal', isOpen)
  }, [isOpen])

  return (
    <ModalContext.Provider value={{ isOpen, open, close, modalContent }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)

  if (context === null) {
    throw new Error("Context can't be used without provider!")
  }

  return context
}
