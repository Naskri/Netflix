import styled from './Button.module.css'

export const Button = () => {
  return (
    <button className={`${styled.button} ${styled['button--newsletter']}`}>Rozpocznij -- </button>
  )
}
