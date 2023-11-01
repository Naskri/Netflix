import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { Logo } from '../../features/UI/Logo/Logo'
import { NotFoundHero } from '../../features/UI/NotFoundHero/NotFoundHero'
import { Wrapper } from '../../features/UI/Wrapper/Wrapper'
import styled from './NotFound.module.css'

export const NotFound = () => {
  return (
    <main className={styled['not-found']}>
      <Wrapper>
        <Navigation>
          <Logo />
        </Navigation>
      </Wrapper>
      <NotFoundHero />
    </main>
  )
}
