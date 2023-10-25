import { useMutation } from 'react-query'
import { signOut } from './apiService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

export const useSignout = () => {
  const navigate = useNavigate()

  const { mutate: signoutFn } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/login')
      toast.success('Succesfully signouted!')
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { signoutFn } as const
}
