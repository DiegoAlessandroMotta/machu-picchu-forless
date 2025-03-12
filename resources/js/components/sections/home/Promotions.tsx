import { BorderButton } from '@/components/atoms/BorderButton'
import { PackageCard } from '@/components/ui/PackageCard'
// import toursData from '@/mocks/tours.json'
import { chunks, truncateText } from '@/utils/utils'
import { Link } from '@inertiajs/react'

interface Props {
	tours: Tour[]
}

export const Promotions = ({ tours }: Props) => {
	const chunkedTours = chunks(tours, 3)

	return (
		<section className="px-4 md:px-8">
			<div className="mx-auto grid max-w-layout grid-cols-1 gap-4 pt-16 lg:grid-cols-2">
				{chunkedTours.map((promotions, index) => {
					const colSpan2Start = index % 2 == 0

					return (
						<div className="grid gap-4 md:grid-cols-2" key={promotions[0].id}>
							{promotions.map((promotion, index) => {
								const style = 'md:col-span-2'
								const className =
									(colSpan2Start && index == 0) ||
									(!colSpan2Start && index == promotions.length - 1)
										? style
										: ''

								return (
									<Link
										href={`/tour/${promotion.code}`}
										className="contents"
										prefetch
										key={promotion.id}
									>
										<PackageCard
											title={promotion.name}
											days={promotion.days}
											price={promotion.price}
											description={truncateText(
												promotion.description ?? '',
												10
											)}
											bgImgUrl={promotion.main_banner}
											className={className}
										/>
									</Link>
								)
							})}
						</div>
					)
				})}
			</div>

			<div className="mt-16 flex justify-center">
				<Link href="#" className="contents">
					<BorderButton className="border-primary text-primary hover:bg-primary hover:text-white">
						Explore all Packages
					</BorderButton>
				</Link>
			</div>
		</section>
	)
}
