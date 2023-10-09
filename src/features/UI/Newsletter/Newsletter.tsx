import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import styled from './Newsletter.module.css'

export const Newsletter = () => {
  return (
    <div className={styled.newsletter}>
      <p className={styled.newsletter__description}>
        Zaczynamy oglądać? Wprowadź adres e‑mail, aby utworzyć lub odnowić konto.
      </p>
      <div className={styled.newsletter__content}>
        <Input />
        <Button />
      </div>
    </div>
  )
}
