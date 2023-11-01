import { CustomLink } from '../CustomLink/CustomLink'
import styled from './NotFoundHero.module.css'
import { useTranslation } from 'react-i18next'

export const NotFoundHero = () => {
  const { t } = useTranslation()

  return (
    <div className={styled.content}>
      <div className={styled.backdrop}>&nbsp;</div>
      <div className={styled.content__typography}>
        <h1 className={styled.content__title}>{t('not-found.title')}</h1>
        <p className={styled.content__description}>{t('not-found.description')}</p>
        <CustomLink path="/" modifier="not-found">
          {t('links.main-page')}
        </CustomLink>

        <p className={styled['content__error-code']}>
          {t('not-found.error')} <strong>NSES-404</strong>
        </p>
      </div>
    </div>
  )
}
