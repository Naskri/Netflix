import { supabase } from '../../lib/supabase/supabase'

export type RegisterServiceProps = {
  email: string
  password: string
}

export const register = async ({ email, password }: RegisterServiceProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}
