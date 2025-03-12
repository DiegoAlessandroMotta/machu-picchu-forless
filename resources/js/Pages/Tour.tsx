import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import { Banner } from '@/components/sections/tour/Banner'
import { ReservationCard } from '@/components/sections/tour/ReservationCard'
import { TourInformation } from '@/components/sections/tour/TourInformation'
import MainLayout from '@/layouts/MainLayout'
import { Head, Link } from '@inertiajs/react'

interface PageProps {
	tour: Tour
	countries: Country[]
}

const Tour = ({ tour, countries }: PageProps) => {
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
						<TourInformation tour={tour}>
							<ReservationCard code={tour.code} countries={countries} />
						</TourInformation>
					</>
				)}

				{tour === undefined && (
					<div className="container mx-auto flex flex-col items-center gap-4">
						<div>Not found</div>
						<Link href="/">
							<ButtonPrimary>Go back</ButtonPrimary>
						</Link>
					</div>
				)}
			</MainLayout>
		</>
	)
}

export default Tour
