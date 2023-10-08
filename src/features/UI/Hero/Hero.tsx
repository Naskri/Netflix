import { Navigation } from '../../Layout/Navigation/Navigation'
import { NavigationActions } from '../../Layout/Navigation/NavigationActions/NavigationActions'
import { CustomLink } from '../CustomLink/CustomLink'
import { LanguageSelect } from '../LanguageSelect/LanguageSelect'
import { Logo } from '../Logo/Logo'
import styled from './Hero.module.css'

export const Hero = () => {
  return (
    <div className={styled.hero}>
      <Navigation>
        <Logo />
        <NavigationActions>
          <LanguageSelect />
          <CustomLink path="/login" modifier="cta">
            Zaloguj się
          </CustomLink>
        </NavigationActions>
      </Navigation>
    </div>
  )
}
