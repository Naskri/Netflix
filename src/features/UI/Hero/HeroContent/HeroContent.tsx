import { useTranslation } from 'react-i18next'
import styled from './HeroContent.module.css'

export const HeroContent = () => {
  const { t } = useTranslation()

  return (
    <div className={styled.hero__content}>
      <h1 className={styled.hero__title}>{t('hero.title')}</h1>
      <p className={styled.hero__description}>{t('hero.description')}</p>
    </div>
  )
}
