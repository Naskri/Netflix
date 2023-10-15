import { Button } from '../../features/UI/Button/Button'
import { FormContainer } from '../../features/UI/Form/FormContainer'
import { InputContainer, InputTypes } from '../../features/UI/InputContainer/InputContainer'
import { Logo } from '../../features/UI/Logo/Logo'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'

import { useSearchParams } from 'react-router-dom'
import { CustomLink } from '../../features/UI/CustomLink/CustomLink'

import { RegisterSchema, RegisterSchemaType } from './RegisterSchema'

import styled from './Register.module.css'

export const Register = () => {
  const { t } = useTranslation()

  const [searchParams, setSearchParams] = useSearchParams()

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

  const submitHandler = () => {
    searchParams.delete('email')

    setSearchParams(searchParams)
    reset({
      email: '',
      password: '',
      passwordConfirm: '',
    })
  }

  return (
    <main className={`${styled.register} backdrop`}>
      <Logo />
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
        <h1 className={styled.register__title}>{t('links.auth-register')}</h1>
        <div className={styled.register__container}>
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
          <InputContainer
            id="passwordConfirm"
            label="form.passwordConfirmLabel"
            error={errors?.passwordConfirm?.message}
            type={InputTypes.password}
            required
            {...register('passwordConfirm')}
          />
        </div>
        <Button modifier="form">{t('links.auth-register')}</Button>
        <CustomLink path="/help" modifier="help">
          {t('form.help')}
        </CustomLink>
        <p className={styled.register__help}>
          {t('form.helpLogin')}{' '}
          <CustomLink path="/login" modifier="help">
            {t('links.auth-login')}
          </CustomLink>
        </p>
      </FormContainer>
    </main>
  )
}
