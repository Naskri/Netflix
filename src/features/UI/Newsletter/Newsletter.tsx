import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'
import { InputContainer } from '../InputContainer/InputContainer'
import styled from './Newsletter.module.css'
import { NewsletterSchema, NewsletterSchemaType } from './NewsletterSchema'

export const Newsletter = () => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterSchemaType>({ resolver: zodResolver(NewsletterSchema) })

  const submitHandler = (data: NewsletterSchemaType) => {
    return data
  }

  return (
    <div className={styled.newsletter}>
      <p className={styled.newsletter__description}>{t('newsletter.title')}</p>
      <form className={styled.newsletter__content} onSubmit={handleSubmit(submitHandler)}>
        <InputContainer
          type="text"
          label={t('newsletter.label')}
          required
          id="email"
          error={errors?.email?.message}
          {...register('email')}
        />
        <Button modifier="newsletter">{t('newsletter.button')}</Button>
      </form>
    </div>
  )
}
