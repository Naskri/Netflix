import { useState } from 'react'
import { useUser } from '../../Authentication/useUser'
import { Button } from '../Button/Button'
import styled from './Avatar.module.css'
import { CustomLink } from '../CustomLink/CustomLink'
import { useSignout } from '../../Authentication/useSignout'

export const Avatar = () => {
  const { user } = useUser()
  const { signoutFn } = useSignout()
  const [isOptionsShowed, setIsOptionsShowed] = useState(false)

  return (
    user && (
      <div className={styled.avatar}>
        <Button onClick={() => setIsOptionsShowed((prevState) => !prevState)}>
          <img src={user.user_metadata.avatar} alt="Avatar" className={styled.avatar__image} />
        </Button>
        {isOptionsShowed && (
          <ul className={styled.avatar__options}>
            <li className={styled.avatar__option}>
              <CustomLink path="account" modifier="navigation">
                Account
              </CustomLink>
            </li>
            <li className={styled.avatar__option}>
              <Button modifier="sign-out" onClick={signoutFn}>
                Sign out
              </Button>
            </li>
          </ul>
        )}
      </div>
    )
  )
}
