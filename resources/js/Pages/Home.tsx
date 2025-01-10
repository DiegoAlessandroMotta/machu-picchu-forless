import { Footer } from '@/components/sections/Footer'
import { Promotions } from '@/components/sections/home/Promotions'
import { Recomendations } from '@/components/sections/home/Recomendations'
import { Travels } from '@/components/sections/home/Travels'
import { Head } from '@inertiajs/react'
import { Header } from '../components/sections/Header'
import { Hero } from '../components/sections/home/Hero'

export default function Home() {
  return (
    <>
      <Head title="Machu Picchu Forless" />
      <div className="bg-[#f3f3f3]">
        <div className="relative flex h-dvh flex-col overflow-y-auto">
          <Header />

          <main className="flex-grow">
            <Hero />
            <Promotions />
            <Travels />
            <Recomendations />
          </main>

          <Footer />
        </div>
      </div>
    </>
  )
}
