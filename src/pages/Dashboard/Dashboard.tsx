import { DashboardHero } from '../../features/Dashboard/DashboardHero/DashboardHero'
import { DashboardNavigation } from '../../features/Layout/DashboardNavigation/DashboardNavigation'

import { Wrapper } from '../../features/UI/Wrapper/Wrapper'
import styled from './Dashboard.module.css'

export const Dashboard = () => {
  return (
    <main className={styled.dashboard}>
      <Wrapper>
        <DashboardNavigation />
      </Wrapper>
      <DashboardHero />
    </main>
  )
}
