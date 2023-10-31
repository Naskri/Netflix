import styled from './MoviesRow.module.css'
import { useTranslation } from 'react-i18next'
import { CustomSwipper } from '../../UI/Swipper/Swipper'

type MoviesRowProps = {
  title: string
  data: any
  modifier?: string
}

export const MoviesRow = ({ title, data, modifier }: MoviesRowProps) => {
  const { t } = useTranslation()

  return (
    <div className={styled['movies-row']}>
      <h2 className={styled.title}>{title}</h2>

      {data?.length > 0 ? (
        <CustomSwipper slides={data} modifier={modifier} />
      ) : (
        <h3 className={styled.empty}>{t('validation.emptyList')}</h3>
      )}
    </div>
  )
}
