import { DashboardNavigation } from '../../features/Layout/DashboardNavigation/DashboardNavigation'
import { Wrapper } from '../../features/UI/Wrapper/Wrapper'
import { Video } from '../../features/Video/Video'
import styled from './Watch.module.css'

export const Watch = () => {
  return (
    <Wrapper>
      <main className={styled.watch}>
        <DashboardNavigation />
        <Video />
      </main>
    </Wrapper>
  )
}
