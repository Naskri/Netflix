import z from 'zod'

export const MovieSchema = z.object({
  id: z.number(),
  custom_id: z.number().optional(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  original_title: z.string().optional(),
  original_name: z.string().optional(),
  name: z.string().optional(),
  title: z.string().optional(),
  overview: z.string(),
  vote_average: z.number(),
  type: z.string().optional(),
})

export const MovieSupabaseSchema = z.object({
  id: z.number().optional(),
  custom_id: z.number(),
  backdrop_path: z.string(),
  genre_ids: z.string(),
  original_title: z.string().optional(),
  original_name: z.string().optional(),
  name: z.string().optional(),
  title: z.string().optional(),
  overview: z.string(),
  vote_average: z.number(),
  type: z.string(),
  user_id: z.string(),
})

export const MoviesSupabaseSchema = z.array(MovieSupabaseSchema)

export const MoviesSchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
})

export type MoviesSchemaType = z.infer<typeof MoviesSchema>
export type MovieSchemaType = z.infer<typeof MovieSchema>

export type MovieSupabaseType = z.infer<typeof MovieSupabaseSchema>
export type MoviesSupabaseType = z.infer<typeof MoviesSupabaseSchema>
