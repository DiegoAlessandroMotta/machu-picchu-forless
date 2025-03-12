import { ClockIcon } from '@/components/icons/ClockIcon'
import { HikingIcon } from '@/components/icons/HikingIcon'
import { MountainIcon } from '@/components/icons/MountainIcon'
import { NotebookIcon } from '@/components/icons/NotebookIcon'
import { Gallery } from '@/components/ui/Gallery'
import { truncateText } from '@/utils/utils'
import { PropsWithChildren } from 'react'

interface PropsTheRevenge {
	label: string
	value: any
}

const InformationCard = ({
	children,
	label,
	value
}: PropsWithChildren<PropsTheRevenge>) => {
	return (
		<div className="flex items-center gap-3">
			{children}
			<div className="flex flex-col">
				<span className="font-bold">{label}:</span>
				<span className="text-[#838080]">{value}</span>
			</div>
		</div>
	)
}

interface Props {
	tour: Tour
}

export const TourInformation = ({
	tour,
	children
}: PropsWithChildren<Props>) => {
	const durationText = tour.days > 1 ? `${tour.days} Days` : `${tour.days} Day`
	const maxAltitudeText = `${tour.max_altitude} m.a.s.l`
	const truncatedDescription = truncateText(tour.description ?? '', 50)

	return (
		<section className="px-4 md:px-8">
			<div className="mx-auto max-w-layout py-4">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center">
					<InformationCard label="Duration" value={durationText}>
						<ClockIcon className="h-8 w-8 flex-shrink-0 text-primary" />
					</InformationCard>

					<InformationCard label="Type Service" value={tour.service_type}>
						<NotebookIcon className="h-8 w-8 flex-shrink-0 text-primary" />
					</InformationCard>

					<InformationCard label="Max Altitude" value={maxAltitudeText}>
						<MountainIcon className="h-8 w-8 flex-shrink-0 text-primary" />
					</InformationCard>

					<InformationCard label="Activity Level" value={tour.activity_level}>
						<HikingIcon className="h-8 w-8 flex-shrink-0 text-primary" />
					</InformationCard>
				</div>
			</div>

			<div className="h-0.5 w-full bg-[#dee2e6]"></div>

			<div className="mx-auto mt-12 grid max-w-layout gap-x-12 gap-y-8 lg:grid-cols-[1fr_auto]">
				<article className="flex flex-col gap-2">
					<h1 className="text-4xl font-bold">{tour.name}</h1>
					<p className="text-lg font-semibold">
						From <span className="text-primary">${tour.price}</span> /{' '}
						{tour.days} Days
					</p>
					{tour.description !== null && (
						<pre
							className="description-content mt-2 text-wrap font-sans font-light leading-6"
							dangerouslySetInnerHTML={{ __html: tour.description }}
						></pre>
					)}
				</article>
				{children && <aside className="flex justify-center">{children}</aside>}
			</div>

			<div className="mx-auto flex max-w-layout flex-col pt-16">
				<Gallery
					galleryIdentifier="tour-images"
					elements={[
						{
							id: String(tour.id),
							title: tour.name,
							description: truncatedDescription,
							original: tour.main_banner,
							thumbnail: tour.main_banner
						}
					]}
				/>
			</div>

			<div className="mx-auto mt-12 max-w-layout"></div>
		</section>
	)
}
