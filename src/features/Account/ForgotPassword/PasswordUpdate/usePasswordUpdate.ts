import { useMutation } from 'react-query'

import { toast } from 'react-toastify'
import { updateUserPassword } from '../../apiService'
import { useNavigate } from 'react-router'

export type UserPasswordUpdateData = {
  email: string
  password: string
}

export const usePasswordUpdate = () => {
  const navigate = useNavigate()
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: ({ email, password }: UserPasswordUpdateData) =>
      updateUserPassword({ email, password }),
    onSuccess: () => {
      toast.success('Succesfully updated user password!')
      navigate('../../login')
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { updateUser, isLoading } as const
}
