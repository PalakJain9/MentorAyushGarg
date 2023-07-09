import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import Pricing from '@/components/Pricing'
import WhomDoYouHelp from '@/components/WhomDoYouHelp'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className='flex flex-col'
    >
      <HeroSection />
      <WhomDoYouHelp />
      <Pricing />
      <Footer />
    </div>
  )
}
