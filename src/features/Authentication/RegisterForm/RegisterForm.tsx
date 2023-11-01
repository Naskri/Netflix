import { useTranslation } from 'react-i18next'
import { Button } from '../../UI/Button/Button'
import { CustomLink } from '../../UI/CustomLink/CustomLink'
import { FormContainer } from '../../UI/Form/FormContainer'
import { InputContainer, InputTypes } from '../../UI/InputContainer/InputContainer'

import styled from './../Form.module.css'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { RegisterSchema, RegisterSchemaType } from './RegisterSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegister } from './useRegister'
import { SpinnerMini } from '../../UI/SpinnerMini/SpinnerMini'

export const RegisterForm = () => {
  const { t } = useTranslation()
  const { isRegistering, userRegister } = useRegister()

  const [searchParams] = useSearchParams()

  const email = searchParams.get('email')

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: email ? email : '' },
  })

  const submitHandler = ({ email, password }: RegisterSchemaType) => {
    userRegister({ email, password }, { onSuccess: () => reset() })
  }

  return (
    <FormContainer onSubmit={handleSubmit(submitHandler)}>
      <h1 className={styled.form__title}>{t('links.auth-register')}</h1>
      <div className={styled.form__container}>
        <InputContainer
          id="email"
          label="form.emailLabel"
          error={errors?.email?.message}
          type={InputTypes.text}
          required
          disabled={isRegistering}
          {...register('email')}
        />
        <InputContainer
          id="password"
          label="form.passwordLabel"
          error={errors?.password?.message}
          type={InputTypes.password}
          required
          disabled={isRegistering}
          {...register('password')}
        />
        <InputContainer
          id="passwordConfirm"
          label="form.passwordConfirmLabel"
          error={errors?.passwordConfirm?.message}
          type={InputTypes.password}
          required
          disabled={isRegistering}
          {...register('passwordConfirm')}
        />
      </div>
      <Button modifier="form">{isRegistering ? <SpinnerMini /> : t('links.auth-register')}</Button>
      <CustomLink path="/help" modifier="help">
        {t('form.help')}
      </CustomLink>
      <p className={styled.form__help}>
        {t('form.helpLogin')}{' '}
        <CustomLink path="/login" modifier="help">
          {t('links.auth-login')}
        </CustomLink>
      </p>
    </FormContainer>
  )
}
