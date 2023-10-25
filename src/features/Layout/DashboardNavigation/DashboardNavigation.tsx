import { Logo } from '../../UI/Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import { NavigationActions } from '../Navigation/NavigationActions/NavigationActions'
import { Search } from '../../UI/Search/Search'
import { Avatar } from '../../UI/Avatar/Avatar'
import { DashboardNavigationList } from './DashboardNavigationList/DashboardNavigationList'
import styled from './DashboardNavigation.module.css'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

export const DashboardNavigation = () => {
  const matches = useMediaQuery('(max-width:36rem')

  return (
    <div className={styled['dashboard-navigation']}>
      <Navigation modifier="dashboard">
        <Logo />
        {matches && <Search />}
        <DashboardNavigationList />
        <NavigationActions>
          {!matches && <Search />}
          <Avatar />
        </NavigationActions>
      </Navigation>
    </div>
  )
}
