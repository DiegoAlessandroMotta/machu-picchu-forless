import { Banner } from '@/components/sections/tour/Banner'
import { ReservationCard } from '@/components/sections/tour/ReservationCard'
import { TourInformation } from '@/components/sections/tour/TourInformation'
import MainLayout from '@/layouts/MainLayout'
import { Head } from '@inertiajs/react'

interface Tour {
	id: number
	code: string
	name: string
	price: string
	days: number
	nights: number
	description: string | null
	main_banner: string
	max_altitude: string
	service_type_id: number
	category_id: number
	activity_level_id: number
	service_type: string
	category: string
	activity_level: string
}

interface PageProps {
	tour: Tour
}

const Tour = ({ tour }: PageProps) => {
	console.log(tour)

	return (
		<>
			<Head title="Machu Picchu Forless" />
			<MainLayout>
				{tour !== undefined && (
					<>
						<Banner
							title={tour.name}
							bgImgUrl={tour.main_banner}
							price={Number(tour.price)}
							days={tour.days}
						/>
						<TourInformation
							typeOfService={tour.service_type}
							duration={tour.days}
							maxAltitude={tour.max_altitude}
							activityLevel={tour.activity_level}
							title={tour.name}
							price={Number(tour.price)}
							days={tour.days}
							description={tour.description ?? undefined}
						>
							<ReservationCard code={tour.code} />
						</TourInformation>
					</>
				)}

				{tour === undefined && <p>Tour no encontrado :P</p>}
			</MainLayout>
		</>
	)
}

export default Tour
