import { supabaseURL } from '../../lib/i18n/supabase/supabase'
import { Button } from '../UI/Button/Button'
import styled from './AccountUpdating.module.css'
import { useAvatars } from './useAvatars'
import { useChangeAvatar } from './useChangeAvatar'

export const AccountUpdating = () => {
  const { avatars } = useAvatars()
  const { changeAvatarFn } = useChangeAvatar()

  return (
    <div className={styled['account-updating']}>
      <h2 className={styled['account-updating__title']}>Change a avatar</h2>
      <ul className={styled['account-updating__avatars']}>
        {avatars?.map((avatar) => (
          <li key={avatar.id}>
            <Button
              onClick={() =>
                changeAvatarFn(`${supabaseURL}/storage/v1/object/public/avatars/${avatar.name}`)
              }
            >
              <img
                src={`${supabaseURL}/storage/v1/object/public/avatars/${avatar.name}`}
                alt={avatar.name}
                className={styled.avatar}
              />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
