import { Link } from 'react-router-dom'
import styled from './CustomLink.module.css'
import { ReactNode } from 'react'

type CustomLinkProps = {
  children: ReactNode
  path: string
  modifier?: string
}

export const CustomLink = ({ children, path, modifier }: CustomLinkProps) => {
  return (
    <Link to={path} className={`${styled['custom-link']} ${styled[`custom-link--${modifier}`]}`}>
      {children}
    </Link>
  )
}
