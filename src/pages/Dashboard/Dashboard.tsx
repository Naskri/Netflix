import { DashboardHero } from '../../features/Dashboard/DashboardHero/DashboardHero'
import { DashboardNavigation } from '../../features/Layout/DashboardNavigation/DashboardNavigation'
import { Outlet } from 'react-router'

import { Wrapper } from '../../features/UI/Wrapper/Wrapper'
import styled from './Dashboard.module.css'

export const Dashboard = () => {
  return (
    <main className={styled.dashboard}>
      <Wrapper>
        <DashboardNavigation />
      </Wrapper>
      <DashboardHero />
      <div className={styled.dashboard__rest}>
        <Outlet />
      </div>
    </main>
  )
}
