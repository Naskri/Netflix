import { supabase } from '../../../lib/i18n/supabase/supabase'
import { MovieSupabaseType, MoviesSchema, MoviesSupabaseSchema } from './MoviesSchema'
import { DeleteMovieProps } from './useDeleteMovie'

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

    const parsedData = MoviesSchema.parse(data)

    return parsedData
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}

export const addMovieToList = async (movie: MovieSupabaseType) => {
  const { error } = await supabase.from('list').insert([movie]).select()

  if (error) {
    throw new Error(error.message)
  }
}

export const getMovies = async (id: string | undefined) => {
  if (!id) return

  const { data: list, error } = await supabase.from('list').select('*').eq('user_id', id)

  if (error) {
    throw new Error(error.message)
  }

  const parsedData = MoviesSupabaseSchema.parse(list)

  return parsedData
}

export const deleteMovieFromList = async ({ id, userId }: DeleteMovieProps) => {
  if (!id) return

  const { error } = await supabase.from('list').delete().eq('custom_id', id).eq('user_id', userId)
  if (error) {
    throw new Error(error.message)
  }
}
