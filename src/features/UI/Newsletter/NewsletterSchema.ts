import z from 'zod'

export const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'validation.emailRequired' })
    .email({ message: 'validation.emailInvalid' }),
})

export type NewsletterSchemaType = z.infer<typeof NewsletterSchema>
