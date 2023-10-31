import { useState } from 'react'
import { useUser } from '../../Authentication/useUser'
import { Button } from '../Button/Button'
import styled from './Avatar.module.css'
import { CustomLink } from '../CustomLink/CustomLink'
import { useSignout } from '../../Authentication/useSignout'
import { useTranslation } from 'react-i18next'

export const Avatar = () => {
  const { user } = useUser()
  const { signoutFn } = useSignout()
  const [isOptionsShowed, setIsOptionsShowed] = useState(false)

  const { t } = useTranslation()

  return (
    user && (
      <div className={styled.avatar}>
        <Button onClick={() => setIsOptionsShowed((prevState) => !prevState)}>
          <img src={user.user_metadata.avatar} alt="Avatar" className={styled.avatar__image} />
        </Button>
        {isOptionsShowed && (
          <ul className={styled.avatar__options}>
            <li className={styled.avatar__option}>
              <CustomLink path="../account" modifier="navigation">
                {t('avatar.account')}
              </CustomLink>
            </li>
            <li className={styled.avatar__option}>
              <Button modifier="sign-out" onClick={signoutFn}>
                {t('avatar.signout')}
              </Button>
            </li>
          </ul>
        )}
      </div>
    )
  )
}
