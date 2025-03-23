import Features from '@/sections/features'
import Header from '@/sections/header'
import Showcase from '@/sections/showcase'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'

export default function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <Features />
      <Footer />
      <ScrollToTop />
    </>
  )
}
