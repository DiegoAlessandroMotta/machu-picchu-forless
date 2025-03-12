import { EyeIcon } from '@/components/icons/EyeIcon'
import { PencilSquareIcon } from '@/components/icons/PencilSquareIcon'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { TrashIcon } from '@/components/icons/TrashIcon'
import { Button } from '@/dashboard/components/Button'
import { Card } from '@/dashboard/components/card'
import { Container } from '@/dashboard/components/Container'
import { Header } from '@/dashboard/components/Header'
import { SearchInput } from '@/dashboard/components/SearchInput'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { CustomHead } from '@/layouts/CustomHead'
import { Link, router } from '@inertiajs/react'
import React, { PropsWithChildren, useState } from 'react'
import ConfirmDeleteModal from '@/dashboard/components/ConfirmDeleteModal'

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

const OptionButton = ({
	children,
	...props
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
	return (
		<button
			className="rounded p-1.5 hover:bg-gray-200 hover:text-gray-600"
			{...props}
		>
			{children}
		</button>
	)
}

interface ToursPageProps extends PageProps {
	tours: Tour[]
}

const ListTours = ({ tours }: ToursPageProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedTour, setSelectedTour] = useState<Tour | null>(null)

	const handleDeleteClick = (tour: Tour) => {
		setSelectedTour(tour)
		setIsModalOpen(true)
	}

	const handleConfirmDelete = () => {
		if (selectedTour) {
			router.delete(route('dashboard.tours.destroy', { id: selectedTour }))
			setIsModalOpen(false)
			setSelectedTour(null)
		}
	}

	const handleCancelDelete = () => {
		setIsModalOpen(false)
		setSelectedTour(null)
	}

	return (
		<>
			<CustomHead title="List Tours" />
			<Container>
				<Header title="Tours">
					<Link href={route('dashboard.tours.create')} prefetch>
						<Button.Base text="Add" icon={<PlusIcon className="h-5 w-5" />} />
					</Link>
				</Header>

				<Card className="overflow-hidden">
					<div className="border-b px-4 py-6">
						<SearchInput placeholder="Search tours" fullWidth />
					</div>
					<div className="overflow-x-auto">
						<table className="w-full min-w-[1280px] table-auto text-sm">
							<thead className="border-b bg-gray-100 text-gray-700">
								<tr className="[&>th]:p-4 [&>th]:text-start">
									<th>Name</th>
									<th>URL Code</th>
									<th>Price</th>
									<th>Days</th>
									<th>Nights</th>
									<th>Max altitude {'(m.a.s.l)'}</th>
									<th>Service type</th>
									<th>Category</th>
									<th>Activity level</th>
									<th></th>
								</tr>
							</thead>
							<tbody className="divide-y text-gray-500">
								{tours &&
									tours.length > 0 &&
									tours.map((tour) => (
										<tr
											key={tour.id}
											className="transition-colors hover:bg-gray-50"
										>
											<td className="max-w-64 truncate p-4 font-medium text-gray-700 hover:underline">
												<a href="#" className="contents">
													{tour.name}
												</a>
											</td>
											<td className="max-w-64 truncate p-4">{tour.code}</td>
											<td>${tour.price}</td>
											<td>{tour.days}</td>
											<td>{tour.nights}</td>
											<td>{tour.max_altitude} m</td>
											<td className="max-w-48 truncate p-4">
												{tour.service_type}
											</td>
											<td className="max-w-48 truncate p-4">{tour.category}</td>
											<td className="max-w-48 truncate p-4">
												{tour.activity_level}
											</td>
											<td className="text-gray-400">
												<div className="flex items-center gap-0.5 pr-4">
													<OptionButton>
														<PencilSquareIcon className="inline-block h-5 w-5" />
													</OptionButton>
													<OptionButton onClick={() => handleDeleteClick(tour)}>
														<TrashIcon className="inline-block h-5 w-5" />
													</OptionButton>
													<a
														// href={`/tour/${tour.code}`}
														href={route('web.tours.show', { id: tour.code })}
														className="contents"
														target="_blank"
														rel="noreferrer"
													>
														<OptionButton>
															<EyeIcon className="inline-block h-5 w-5" />
														</OptionButton>
													</a>
												</div>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</Card>
			</Container>

			<ConfirmDeleteModal
				isOpen={isModalOpen}
				onConfirm={handleConfirmDelete}
				onCancel={handleCancelDelete}
			/>
		</>
	)
}

const layout: LayoutType = (page) => <DashboardLayout children={page} />
ListTours.layout = layout

export default ListTours
