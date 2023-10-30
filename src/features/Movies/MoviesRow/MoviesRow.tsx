import styled from './MoviesRow.module.css'
import { CustomSwipper } from '../../UI/Swipper/Swipper'

type MoviesRowProps = {
  title: string
  data: any
  modifier?: string
}

export const MoviesRow = ({ title, data, modifier }: MoviesRowProps) => {
  return (
    <div className={styled['movies-row']}>
      <h2 className={styled.title}>{title}</h2>

      {data?.length > 0 ? (
        <CustomSwipper slides={data} modifier={modifier} />
      ) : (
        <h3 className={styled.empty}>Your list is empty!</h3>
      )}
    </div>
  )
}
