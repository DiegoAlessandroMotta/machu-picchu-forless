import { Promotions } from '@/components/sections/home/Promotions'
import { Recomendations } from '@/components/sections/home/Recomendations'
import { Travels } from '@/components/sections/home/Travels'
import MainLayout from '@/layouts/MainLayout'
import { Head } from '@inertiajs/react'
import { Hero } from '../components/sections/home/Hero'

export default function Home() {
  return (
    <>
      <Head title="Machu Picchu Forless" />
      <MainLayout>
        <Hero />
        <Promotions />
        <Travels />
        <Recomendations />
      </MainLayout>
    </>
  )
}
