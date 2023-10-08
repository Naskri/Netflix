import { ReactNode } from 'react'
import styled from './NavigationActions.module.css'

type NavigationActionsProps = {
  children: ReactNode
}

export const NavigationActions = ({ children }: NavigationActionsProps) => {
  return <div className={styled['navigation-actions']}>{children}</div>
}
