import { ReactNode } from 'react'
import styled from './Navigation.module.css'

type NavigationProps = {
  children: ReactNode
  modifier?: string
}

export const Navigation = ({ children, modifier }: NavigationProps) => {
  return (
    <nav className={`${styled.navigation} ${modifier && styled[`navigation--${modifier}`]}`}>
      {children}
    </nav>
  )
}
