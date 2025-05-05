import { BorderButton } from '@/components/atoms/BorderButton'
import { PackageCard } from '@/components/ui/PackageCard'
import { truncateText } from '@/utils/utils'
import { Link } from '@inertiajs/react'

interface Props {
	tours: Tour[]
}

export const Promotions = ({ tours: promotions }: Props) => {
	return (
		<section className="px-4 md:px-8">
			<div className="mx-auto flex max-w-layout flex-col gap-4 pt-16">
				<div
					className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
					key={promotions[0].id}
				>
					{promotions.map((promotion) => {
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
									description={truncateText(promotion.description ?? '', 10)}
									bgImgUrl={promotion.main_banner}
								/>
							</Link>
						)
					})}
				</div>
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
