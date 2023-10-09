import { ReactNode } from 'react'
import styled from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  modifier?: string
}

export const Button = ({ children, modifier }: ButtonProps) => {
  return (
    <button className={`${styled.button} ${modifier && styled[`button--${modifier}`]}`}>
      {children}
    </button>
  )
}
