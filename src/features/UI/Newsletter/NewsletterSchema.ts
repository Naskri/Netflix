import z from 'zod'

export const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'validation.emailRequired' as const })
    .email({ message: 'validation.emailInvalid' as const }),
})

export type NewsletterSchemaType = z.infer<typeof NewsletterSchema>
