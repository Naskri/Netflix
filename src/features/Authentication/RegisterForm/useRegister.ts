import { useMutation } from 'react-query'
import { AuthServiceProps, register } from '../apiService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

export const useRegister = () => {
  const navigate = useNavigate()
  const { mutate: userRegister, isLoading: isRegistering } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ email, password }: AuthServiceProps) => register({ email, password }),
    onSuccess: () => {
      toast.success('User is succesfully created!')
      navigate('/login')
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { userRegister, isRegistering } as const
}
