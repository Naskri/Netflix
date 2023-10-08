import { ReactNode } from 'react'
import styled from './Navigation.module.css'

type NavigationProps = {
  children: ReactNode
}

export const Navigation = ({ children }: NavigationProps) => {
  return <nav className={styled.navigation}>{children}</nav>
}
