import { useQuery } from 'react-query'
import { getVideo } from './VideoServices/VideoServices'

type useVideoProps = {
  movieID: number
  type: string
}

export const useVideo = ({ movieID, type }: useVideoProps) => {
  const { data: video, isLoading } = useQuery({
    queryKey: ['video', movieID],
    queryFn: () => getVideo({ movieID, type }),
  })

  return { video, isLoading } as const
}
