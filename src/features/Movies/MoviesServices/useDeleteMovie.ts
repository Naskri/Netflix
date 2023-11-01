import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { deleteMovieFromList } from './MoviesServices'

export type DeleteMovieProps = {
  id: number | undefined
  userId: string
}

export const useDeleteMovie = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteMovie, isLoading } = useMutation({
    mutationFn: ({ id, userId }: DeleteMovieProps) => deleteMovieFromList({ id, userId }),
    onSuccess: () => {
      toast.success('Movie is succesfully deleted!')
      queryClient.invalidateQueries({ queryKey: ['movies'] })
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { deleteMovie, isLoading } as const
}
