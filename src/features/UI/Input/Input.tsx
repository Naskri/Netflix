import styled from './Input.module.css'
import { VscError } from 'react-icons/vsc'

export const Input = () => {
  return (
    <div className={styled.container}>
      <div className={styled.input__container}>
        <input type="text" className={styled.input} required />
        <label htmlFor="" className={styled.input__label}>
          Adres e-mail
        </label>
      </div>
      <span className={styled.input__error}>
        <VscError /> Adres-email jest wymagany
      </span>
    </div>
  )
}
