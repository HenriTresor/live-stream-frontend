import { Button } from '@/components/ui/button'
import Contact from '@/components/views/landing/Contact'
import Hero from '@/components/views/landing/Hero'
import HowTo from '@/components/views/landing/HowTo'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <HowTo />
      <Contact />
    </>
  )
}
