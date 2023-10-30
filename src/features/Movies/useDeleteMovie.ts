import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { deleteMovieFromList } from './MoviesServices/MoviesServices'

export const useDeleteMovie = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteMovie, isLoading } = useMutation({
    mutationFn: (title: string) => deleteMovieFromList(title),
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
