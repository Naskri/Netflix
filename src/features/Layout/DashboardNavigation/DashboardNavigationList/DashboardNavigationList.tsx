import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import styled from './DashboardNavigationList.module.css'
import { useTranslation } from 'react-i18next'

export const DashboardNavigationList = () => {
  const { t } = useTranslation()
  return (
    <ul className={styled.list}>
      {dashboardNavigationLinks.map((link) => (
        <CustomLink key={link.id} path={link.path} modifier={link.modifier} type="navigation">
          {t(link.link)}
        </CustomLink>
      ))}
    </ul>
  )
}

const dashboardNavigationLinks = [
  {
    id: 1,
    link: 'navigation.movies',
    path: '/dashboard/home',
    modifier: 'navigation',
  },
  {
    id: 2,
    link: 'navigation.series',
    path: '/dashboard/tv-shows',
    modifier: 'navigation',
  },
  {
    id: 5,
    link: 'navigation.list',
    path: '/dashboard/my',
    modifier: 'navigation',
  },
]
