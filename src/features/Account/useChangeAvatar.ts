import { useMutation, useQueryClient } from 'react-query'
import { updateAvatar } from './apiService'
import { toast } from 'react-toastify'

export const useChangeAvatar = () => {
  const query = useQueryClient()

  const { mutate: changeAvatarFn } = useMutation({
    mutationFn: (path: string) => updateAvatar(path),
    onSuccess: () => {
      toast.success('Succesfully changed avatar!')
      query.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { changeAvatarFn } as const
}
