import { Hero } from '@/components/sections/home/Hero'
import { Promotions } from '@/components/sections/home/Promotions'
import { Recomendations } from '@/components/sections/home/Recomendations'
import { Travels } from '@/components/sections/home/Travels'
import MainLayout from '@/layouts/MainLayout'

const heroData = {
	bgImgUrl: '/img/hero-bg.webp',
	title: 'Let us desing your trip of a lifetime',
	description: '',
	buttonText: 'More information',
	buttonHref: '#'
}

interface Props {
	tours: Tour[]
}

export default function Home({ tours }: Props) {
	return (
		<MainLayout>
			<Hero
				bgImgUrl={heroData.bgImgUrl}
				title={heroData.title}
				description={heroData.description}
				buttonText={heroData.buttonText}
				buttonHref={heroData.buttonHref}
			/>
			<Promotions tours={tours} />
			<Travels />
			<Recomendations />
		</MainLayout>
	)
}
