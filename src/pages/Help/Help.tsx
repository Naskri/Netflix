import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { NavigationActions } from '../../features/Layout/Navigation/NavigationActions/NavigationActions'
import { CustomLink } from '../../features/UI/CustomLink/CustomLink'
import { Logo } from '../../features/UI/Logo/Logo'
import { Wrapper } from '../../features/UI/Wrapper/Wrapper'
import { useTranslation } from 'react-i18next'
import styled from './Help.module.css'
import { Outlet } from 'react-router'

export const Help = () => {
  const { t } = useTranslation()
  return (
    <main className={`${styled.help} backdrop`}>
      <Wrapper>
        <Navigation>
          <Logo />
          <NavigationActions>
            <CustomLink path="/login" modifier="cta">
              {t('links.auth-login')}
            </CustomLink>
          </NavigationActions>
        </Navigation>
        <Outlet />
      </Wrapper>
    </main>
  )
}
