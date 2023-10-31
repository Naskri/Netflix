import { useQuery } from 'react-query'
import { getMovieVideo } from './VideoServices/VideoServices'

export const useVideo = (movieID: number) => {
  const { data: video, isLoading } = useQuery({
    queryKey: ['video', movieID],
    queryFn: () => getMovieVideo(movieID),
  })

  return { video, isLoading } as const
}
