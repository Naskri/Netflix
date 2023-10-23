import { useTranslation } from 'react-i18next'
import { Button } from '../../UI/Button/Button'
import { CustomLink } from '../../UI/CustomLink/CustomLink'
import { FormContainer } from '../../UI/Form/FormContainer'
import { InputContainer, InputTypes } from '../../UI/InputContainer/InputContainer'

import styled from './../Form.module.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, LoginSchemaType } from './LoginSchema'

export const LoginForm = () => {
  const { t } = useTranslation()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })

  const submitHandler = () => {
    reset({
      email: '',
      password: '',
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit(submitHandler)}>
      <h1 className={styled.form__title}>{t('links.auth-login')}</h1>
      <div className={styled.form__container}>
        <InputContainer
          id="email"
          label="form.emailLabel"
          error={errors?.email?.message}
          type={InputTypes.text}
          required
          {...register('email')}
        />
        <InputContainer
          id="password"
          label="form.passwordLabel"
          error={errors?.password?.message}
          type={InputTypes.password}
          required
          {...register('password')}
        />
      </div>
      <Button modifier="form">{t('links.auth-login')}</Button>
      <CustomLink path="/help" modifier="help">
        {t('form.help')}
      </CustomLink>
      <p className={styled.form__help}>
        {t('form.helpRegister')}{' '}
        <CustomLink path="/register" modifier="help">
          {t('links.auth-register')}
        </CustomLink>
      </p>
    </FormContainer>
  )
}
