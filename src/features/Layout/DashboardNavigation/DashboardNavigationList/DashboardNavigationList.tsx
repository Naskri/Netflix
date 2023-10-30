import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import styled from './DashboardNavigationList.module.css'

export const DashboardNavigationList = () => {
  return (
    <ul className={styled.list}>
      {dashboardNavigationLinks.map((link) => (
        <CustomLink key={link.id} path={link.path} modifier={link.modifier} type="navigation">
          {link.link}
        </CustomLink>
      ))}
    </ul>
  )
}

const dashboardNavigationLinks = [
  {
    id: 1,
    link: 'Home',
    path: '/dashboard/home',
    modifier: 'navigation',
  },
  {
    id: 2,
    link: 'TV Shows',
    path: '/dashboard/tv-shows',
    modifier: 'navigation',
  },
  {
    id: 5,
    link: 'My List',
    path: '/dashboard/my',
    modifier: 'navigation',
  },
]
