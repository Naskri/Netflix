import z from 'zod'

export const AccountForgotPasswordSchema = z.object({
  email: z.string({ required_error: 'validation.emailRequired' }).email('validation.emailInvalid'),
})

export type AccountForgotPasswordSchemaType = z.infer<typeof AccountForgotPasswordSchema>
