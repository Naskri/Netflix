import { AccountUpdating } from '../../features/Account/AccountUpdating/AccountUpdating'
import { DashboardNavigation } from '../../features/Layout/DashboardNavigation/DashboardNavigation'
import { Wrapper } from '../../features/UI/Wrapper/Wrapper'

export const Account = () => {
  return (
    <main>
      <Wrapper>
        <DashboardNavigation />
        <AccountUpdating />
      </Wrapper>
    </main>
  )
}
