import { CustomLink } from '../CustomLink/CustomLink'
import styled from './Logo.module.css'

export const Logo = () => {
  return (
    <CustomLink path="/" modifier="logo">
      <span className={styled.logo}>Nuxt</span>
    </CustomLink>
  )
}
