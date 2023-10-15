import { ReactNode } from 'react'
import styled from './FormContainer.module.css'

type FormContainerProps = {
  children: ReactNode
  onSubmit: () => void
}

export const FormContainer = ({ children, onSubmit }: FormContainerProps) => {
  return (
    <div className={`${styled.form} ${styled['form--login']}`}>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  )
}
