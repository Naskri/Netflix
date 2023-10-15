import { Button } from '../../features/UI/Button/Button'
import { FormContainer } from '../../features/UI/Form/FormContainer'
import { InputContainer, InputTypes } from '../../features/UI/InputContainer/InputContainer'
import { Logo } from '../../features/UI/Logo/Logo'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { LoginSchema, LoginSchemaType } from './LoginSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { CustomLink } from '../../features/UI/CustomLink/CustomLink'

import styled from './Login.module.css'

export const Login = () => {
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
    <main className={`${styled.login} backdrop`}>
      <Logo />
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
        <h1 className={styled.login__title}>{t('links.auth-login')}</h1>
        <div className={styled.login__container}>
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
        <p className={styled.login__help}>
          {t('form.helpRegister')}{' '}
          <CustomLink path="/register" modifier="help">
            {t('links.auth-register')}
          </CustomLink>
        </p>
      </FormContainer>
    </main>
  )
}
