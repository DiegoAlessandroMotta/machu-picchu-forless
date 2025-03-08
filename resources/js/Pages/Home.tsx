import { Hero } from '@/components/sections/home/Hero'
import { Promotions } from '@/components/sections/home/Promotions'
import { Recomendations } from '@/components/sections/home/Recomendations'
import { Travels } from '@/components/sections/home/Travels'
import MainLayout from '@/layouts/MainLayout'

const heroData = {
	bgImgUrl: '/img/hero-bg.webp',
	title: 'Let us desing your trip of a lifetime',
	description:
		'Descripción sobre lo que se dedica tu empresa y cómo ofreces resultados a tus clientes.',
	buttonText: 'More information',
	buttonHref: '#'
}

export default function Home() {
	return (
		<MainLayout>
			<Hero
				bgImgUrl={heroData.bgImgUrl}
				title={heroData.title}
				description={heroData.description}
				buttonText={heroData.buttonText}
				buttonHref={heroData.buttonHref}
			/>
			<Promotions />
			<Travels />
			<Recomendations />
		</MainLayout>
	)
}
