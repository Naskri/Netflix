import { Logo } from '../../UI/Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import { NavigationActions } from '../Navigation/NavigationActions/NavigationActions'
import { Avatar } from '../../UI/Avatar/Avatar'
import { DashboardNavigationList } from './DashboardNavigationList/DashboardNavigationList'
import styled from './DashboardNavigation.module.css'

export const DashboardNavigation = () => {
  return (
    <div className={styled['dashboard-navigation']}>
      <Navigation modifier="dashboard">
        <Logo />
        <DashboardNavigationList />
        <NavigationActions>
          <Avatar />
        </NavigationActions>
      </Navigation>
    </div>
  )
}
