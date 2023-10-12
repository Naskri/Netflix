import { FAQ } from '../../features/UI/FAQ/FAQ'
import { Hero } from '../../features/UI/Hero/Hero'
import { Newsletter } from '../../features/UI/Newsletter/Newsletter'
import { ZPattern } from '../../features/UI/ZPattern/ZPattern'

export const Home = () => {
  return (
    <main>
      <Hero />
      <ZPattern />
      <FAQ />
      <Newsletter />
    </main>
  )
}
