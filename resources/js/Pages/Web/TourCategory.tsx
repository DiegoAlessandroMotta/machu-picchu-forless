import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import MainLayout from '@/layouts/MainLayout'
import { Banner } from '@/web/tour-categories/sections/Banner'
import { Information } from '@/web/tour-categories/sections/Information'
import { Head, Link } from '@inertiajs/react'

interface PageProps {
	tourCategory: TourCategory
	tours: Tour[]
}

const TourCategory = ({ tourCategory, tours }: PageProps) => {
	return (
		<>
			<Head title="Machu Picchu Forless" />
			<MainLayout>
				{tourCategory !== undefined && (
					<>
						<Banner
							title={tourCategory.name}
							bgImgUrl={tourCategory.main_banner}
						/>
						<Information tourCategory={tourCategory} />

						<div className="mx-auto max-w-layout">
							<h2 className="mb-8 text-3xl font-medium">Top tours</h2>
							<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
								{tours.map((tour) => (
									<div
										className="overflow-hidden rounded-2xl shadow [&_img]:hover:scale-100"
										key={tour.id}
									>
										<div className="flex h-72 items-center justify-center overflow-hidden">
											<Link
												className="contents"
												href={route('web.tours.show', { id: tour.code })}
											>
												<img
													className="h-full w-full scale-110 object-cover transition-transform duration-500"
													src={tour.main_banner}
													alt="no no no"
												/>
											</Link>
										</div>
										<div className="p-4">
											<Link
												className="contents"
												href={route('web.tours.show', { id: tour.code })}
											>
												<h3 className="text font-semibold underline-offset-2 hover:underline">
													{tour.name}
												</h3>
											</Link>
											<div className="mt-3">
												<p className="text-gray-600">
													{tour.days} days / {tour.nights} nights{' '}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</>
				)}

				{tourCategory === undefined && (
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

export default TourCategory
