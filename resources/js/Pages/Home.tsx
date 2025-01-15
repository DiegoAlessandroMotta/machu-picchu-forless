import { Promotions } from '@/components/sections/home/Promotions'
import { Recomendations } from '@/components/sections/home/Recomendations'
import { Travels } from '@/components/sections/home/Travels'
import MainLayout from '@/layouts/MainLayout'
import { Head } from '@inertiajs/react'
import { Hero } from '../components/sections/home/Hero'

const heroProps = {
  bgImgUrl: '/img/hero-bg.webp',
  title: 'Let us desing your trip of a lifetime',
  description:
    'Descripción sobre lo que se dedica tu empresa y cómo ofreces resultados a tus clientes.',
  buttonText: 'More information',
  buttonHref: '#',
}

export default function Home() {
  return (
    <>
      <Head title="Machu Picchu Forless" />
      <MainLayout>
        <Hero
          bgImgUrl={heroProps.bgImgUrl}
          title={heroProps.title}
          description={heroProps.description}
          buttonText={heroProps.buttonText}
          buttonHref={heroProps.buttonHref}
        />
        <Promotions />
        <Travels />
        <Recomendations />
      </MainLayout>
    </>
  )
}
