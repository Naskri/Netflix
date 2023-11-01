import { supabase } from '../../lib/i18n/supabase/supabase'
import { UserPasswordUpdateData } from './ForgotPassword/PasswordUpdate/usePasswordUpdate'

export const getAvatars = async () => {
  const { data, error } = await supabase.storage.from('avatars').list('', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const updateAvatar = async (path: string) => {
  const { data, error } = await supabase.auth.updateUser({
    data: {
      avatar: path,
    },
  })
  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const forgotUserPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email)

  if (error) {
    throw new Error(error.message)
  }
}

export const updateUserPassword = async ({ email, password }: UserPasswordUpdateData) => {
  const { error } = await supabase.auth.updateUser({
    email,
    password,
    data: { password },
  })
  if (error) {
    throw new Error(error.message)
  }
}
