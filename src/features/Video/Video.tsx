import { useParams, useSearchParams } from 'react-router-dom'
import styled from './Video.module.css'
import { useVideo } from './useVideo'
import { useModal } from '../../context/ModalContext'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Spinner } from '../UI/Spinner/Spinner'
import { useTranslation } from 'react-i18next'

export const Video = () => {
  const { close } = useModal()
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') || 'movie'
  const { video, isLoading } = useVideo({ movieID: Number(id), type })
  const { t } = useTranslation()

  useEffect(() => {
    close()
  }, [])

  return (
    <div className={styled.video}>
      {isLoading && <Spinner />}
      {!isLoading && video && video?.results?.length === 0 && (
        <h1 className={styled.video__title}>{t('movies.not-video')}</h1>
      )}
      {video && video?.results?.length > 0 && (
        <ReactPlayer
          muted={true}
          playing={true}
          height="100%"
          width="100%"
          controls
          url={`https://www.youtube.com/watch?v=${video.results[0].key}&controls=1`}
        />
      )}
    </div>
  )
}
