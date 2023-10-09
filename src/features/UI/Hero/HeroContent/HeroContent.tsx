import styled from './HeroContent.module.css'

export const HeroContent = () => {
  return (
    <div className={styled.hero__content}>
      <h1 className={styled.hero__title}>
        Hity filmowe, popularne seriale i wiele więcej już od 29 zł.
      </h1>
      <p className={styled.hero__description}>Dołącz już dziś. Anuluj, kiedy chcesz.</p>
    </div>
  )
}
