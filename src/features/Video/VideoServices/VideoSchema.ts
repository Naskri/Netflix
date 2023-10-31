import z from 'zod'

export const VideoSchema = z.object({
  key: z.string(),
})

export const VideosSchema = z.object({
  id: z.number(),
  results: z.array(VideoSchema),
})

export type VideoSchemaType = z.infer<typeof VideoSchema>
export type VideosSchemaType = z.infer<typeof VideosSchema>
