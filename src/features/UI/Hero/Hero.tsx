import { useTranslation } from 'react-i18next'

import { Navigation } from '../../Layout/Navigation/Navigation'
import { NavigationActions } from '../../Layout/Navigation/NavigationActions/NavigationActions'
import { CustomLink } from '../CustomLink/CustomLink'
import { LanguageSelect } from '../LanguageSelect/LanguageSelect'
import { Logo } from '../Logo/Logo'
import styled from './Hero.module.css'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className={styled.hero}>
      <Navigation>
        <Logo />
        <NavigationActions>
          <LanguageSelect />
          <CustomLink path="/login" modifier="cta">
            {t('links.auth-login')}
          </CustomLink>
        </NavigationActions>
      </Navigation>
    </div>
  )
}
