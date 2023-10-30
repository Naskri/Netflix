import { Link, NavLink } from 'react-router-dom'
import styled from './CustomLink.module.css'
import { ReactNode } from 'react'

type CustomLinkProps = {
  children: ReactNode
  path: string
  modifier?: string
  type?: string
}

export const CustomLink = ({ children, path, modifier, type }: CustomLinkProps) => {
  return type === 'navigation' ? (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styled['custom-link']} ${styled[`custom-link--${modifier}`]} ${
          isActive && styled['custom-link--active']
        }`
      }
    >
      {children}
    </NavLink>
  ) : (
    <Link to={path} className={`${styled['custom-link']} ${styled[`custom-link--${modifier}`]}`}>
      {children}
    </Link>
  )
}
