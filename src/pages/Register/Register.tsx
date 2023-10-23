import { Logo } from '../../features/UI/Logo/Logo'
import styled from './Register.module.css'
import { RegisterForm } from '../../features/Authentication/RegisterForm/RegisterForm'

export const Register = () => {
  return (
    <main className={`${styled.register} backdrop`}>
      <Logo />
      <RegisterForm />
    </main>
  )
}
