import { supabase } from '../../../lib/i18n/supabase/supabase'

export const getCategoryMovies = async (categoryURL: string) => {
  try {
    const response = await fetch(categoryURL, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    })

    if (!response.ok) {
      throw new Error(`${response.status} : ${response.statusText}`)
    }

    const data = await response.json()

    return data.results
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}

export const addMovieToList = async (movie: any) => {
  const { data, error } = await supabase.from('list').insert([movie]).select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const getMovies = async (id: string | undefined) => {
  if (!id) return

  const { data: list, error } = await supabase.from('list').select('*').eq('user_id', id)

  if (error) {
    throw new Error(error.message)
  }

  return list
}

export const deleteMovieFromList = async (title: string) => {
  const { error } = await supabase.from('list').delete().eq('original_title', title)
  if (error) {
    throw new Error(error.message)
  }
}
