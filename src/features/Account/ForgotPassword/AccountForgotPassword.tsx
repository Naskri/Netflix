import { useForm } from 'react-hook-form'
import { Button } from '../../UI/Button/Button'
import { FormContainer } from '../../UI/Form/FormContainer'
import { InputContainer, InputTypes } from '../../UI/InputContainer/InputContainer'
import { SpinnerMini } from '../../UI/SpinnerMini/SpinnerMini'
import styled from './AccountForgotPassword.module.css'
import { useTranslation } from 'react-i18next'
import {
  AccountForgotPasswordSchema,
  AccountForgotPasswordSchemaType,
} from './AccountForgotPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAccountForgotPassword } from './useAccountForgotPassword'

export const AccountForgotPassword = () => {
  const { t } = useTranslation()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AccountForgotPasswordSchemaType>({
    resolver: zodResolver(AccountForgotPasswordSchema),
  })

  const { forgotPassword, isLoading } = useAccountForgotPassword()

  const submitHandler = ({ email }: AccountForgotPasswordSchemaType) => {
    forgotPassword(email, { onSuccess: () => reset() })
  }

  return (
    <div className={styled['account-forgot']}>
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
        <h1 className={styled['account-forgot__title']}>{t('auth.forgot')}</h1>
        <p className={styled['account-forgot__description']}>{t('auth.forgot-description')}</p>
        <div className={styled['account-forgot__form']}>
          <InputContainer
            id="email"
            label="form.emailLabel"
            type={InputTypes.text}
            error={errors?.email?.message}
            required
            disabled={isLoading}
            {...register('email')}
          />
        </div>
        <Button modifier="form">{isLoading ? <SpinnerMini /> : t('links.forgot-password')}</Button>
      </FormContainer>
    </div>
  )
}
