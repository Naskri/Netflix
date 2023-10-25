import { supabase } from '../../lib/i18n/supabase/supabase'

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
