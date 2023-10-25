import { supabase, supabaseURL } from '../../lib/i18n/supabase/supabase'

export type AuthServiceProps = {
  email: string
  password: string
}

export const register = async ({ email, password }: AuthServiceProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        avatar: `${supabaseURL}/storage/v1/object/public/avatars/avatar-1.png`,
      },
    },
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const login = async ({ email, password }: AuthServiceProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession()

  if (!session.session) return null

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    throw new Error(error.message)
  }

  return user
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw new Error(error.message)
  }
}
