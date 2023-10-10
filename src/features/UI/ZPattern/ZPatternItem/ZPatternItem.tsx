import { useTranslation } from 'react-i18next'
import styled from './ZPatternItem.module.css'

export type ZPatternItemData = {
  id: number
  title: string
  description: string
  video?: string
  image?: string
}

export const ZPatternItem = ({ title, description, video, image }: ZPatternItemData) => {
  const { t } = useTranslation()

  return (
    <div className={styled['zpattern-item']}>
      <div className={styled['z-pattern-item__content']}>
        <div className={styled['zpattern-item__typography']}>
          <h2 className={styled['z-pattern-item__title']}>{t(title)}</h2>
          <p className={styled['z-pattern-item__description']}>{t(description)}</p>
        </div>
        <div className={styled['z-pattern-item__visual']}>
          <img src={image} alt="" className={styled['z-pattern-item__image']} />
          <video
            src={video}
            autoPlay
            muted
            loop
            className={styled['z-pattern-item__video']}
          ></video>
        </div>
      </div>
    </div>
  )
}
