import { Logo } from '../../features/UI/Logo/Logo'
import { LoginForm } from '../../features/Authentication/LoginForm/LoginForm'

import styled from './Login.module.css'

export const Login = () => {
  return (
    <main className={`${styled.login} backdrop`}>
      <Logo />
      <LoginForm />
    </main>
  )
}
