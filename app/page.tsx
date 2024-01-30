import Hero from '@/app/_components/layout/Hero'
import HomeMenu from '@/app/_components/layout/HomeMenu'
import IngredientsSlide from './_components/layout/IngredientsSlide'
import About from './_components/layout/About'
import Footer from './_components/layout/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <IngredientsSlide />
      <HomeMenu />
      <About />
      <Footer />
    </>
  )
}
