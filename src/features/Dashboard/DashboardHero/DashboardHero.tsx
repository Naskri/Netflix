import { useModal } from '../../../context/ModalContext'
import { Button } from '../../UI/Button/Button'
import { Wrapper } from '../../UI/Wrapper/Wrapper'
import styled from './DashboardHero.module.css'
import { useRandomMovie } from './useRandomMovie'
import { GrCircleInformation } from 'react-icons/gr'

export const DashboardHero = () => {
  const { movie } = useRandomMovie()

  const { open } = useModal()

  return (
    <div
      style={{
        backgroundImage: movie
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : '',
      }}
      className={styled['dashboard-hero']}
    >
      <Wrapper>
        <div className={styled['dashboard-hero__content']}>
          <h1 className={styled['dashboard-hero__title']}>{movie?.original_title}</h1>
          <p className={styled['dashboard-hero__description']}>{`${movie?.overview.slice(
            0,
            180
          )}...`}</p>
          <Button modifier="more-info" onClick={() => open(movie)}>
            <GrCircleInformation />
            More info
          </Button>
        </div>
      </Wrapper>
    </div>
  )
}
