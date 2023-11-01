import { useMutation } from 'react-query'
import { forgotUserPassword } from '../apiService'
import { toast } from 'react-toastify'

export const useAccountForgotPassword = () => {
  const { mutate: forgotPassword, isLoading } = useMutation({
    mutationFn: (email: string) => forgotUserPassword(email),
    onSuccess: () => {
      toast.success('Succesfully send email!')
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { forgotPassword, isLoading } as const
}
