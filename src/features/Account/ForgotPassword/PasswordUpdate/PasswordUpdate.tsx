import { useForm } from 'react-hook-form'
import { Button } from '../../../UI/Button/Button'
import { FormContainer } from '../../../UI/Form/FormContainer'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import { SpinnerMini } from '../../../UI/SpinnerMini/SpinnerMini'
import { useTranslation } from 'react-i18next'
import styled from './../AccountForgotPassword.module.css'
import { PasswordUpdateSchema, PasswordUpdateSchemaType } from './PasswordUpdateSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'
import { usePasswordUpdate } from './usePasswordUpdate'

export const PasswordUpdate = () => {
  const [searchParams] = useSearchParams()

  const email = searchParams.get('email')

  const { updateUser, isLoading } = usePasswordUpdate()

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<PasswordUpdateSchemaType>({
    resolver: zodResolver(PasswordUpdateSchema),
    defaultValues: { email: email || '' },
  })
  const { t } = useTranslation()

  const submitHandler = ({ email, password }: PasswordUpdateSchemaType) => {
    updateUser({ email, password }, { onSuccess: () => reset() })
  }

  return (
    <div className={styled['account-forgot']}>
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
        <h1 className={styled['account-forgot__title']}>{t('auth.update')}</h1>
        <p className={styled['account-forgot__description']}>{t('auth.update-password')}</p>
        <div className={styled['account-forgot__form']}>
          <InputContainer
            id="email"
            label="form.emailLabel"
            type={InputTypes.text}
            required
            disabled
            {...register('email')}
          />
          <InputContainer
            id="password"
            label="form.passwordLabel"
            type={InputTypes.password}
            error={errors?.password?.message}
            required
            disabled={isLoading}
            {...register('password')}
          />
          <InputContainer
            id="passwordConfirm"
            label="form.passwordConfirmLabel"
            type={InputTypes.password}
            error={errors?.passwordConfirm?.message}
            required
            disabled={isLoading}
            {...register('passwordConfirm')}
          />
        </div>
        <Button modifier="form">{isLoading ? <SpinnerMini /> : t('links.forgot-password')}</Button>
      </FormContainer>
    </div>
  )
}
