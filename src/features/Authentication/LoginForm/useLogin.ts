import { useNavigate } from 'react-router'
import { useMutation } from 'react-query'
import { AuthServiceProps, login } from '../apiService'
import { toast } from 'react-toastify'

export const useLogin = () => {
  const navigate = useNavigate()
  const { mutate: userLogin, isLoading: isLogin } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ email, password }: AuthServiceProps) => login({ email, password }),
    onSuccess: () => {
      toast.success('Succesfully logged!')
      navigate('/dashboard/home')
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { userLogin, isLogin } as const
}
