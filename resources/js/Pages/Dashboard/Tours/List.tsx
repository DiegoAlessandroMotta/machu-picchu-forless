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
import { Link } from '@inertiajs/react'

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

interface ToursPageProps extends PageProps {
	tours: Tour[]
}

const ListTours = ({ tours }: ToursPageProps) => {
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
									<th>Code</th>
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
											className="transition-colors hover:bg-gray-50 [&>td]:p-4"
										>
											<td className="max-w-64 truncate font-medium text-gray-700 hover:underline">
												<a href="#" className="contents">
													{tour.name}
												</a>
											</td>
											<td className="max-w-64 truncate">{tour.code}</td>
											<td>${tour.price}</td>
											<td>{tour.days}</td>
											<td>{tour.nights}</td>
											<td>{tour.max_altitude} m</td>
											<td className="max-w-48 truncate">{tour.service_type}</td>
											<td className="max-w-48 truncate">{tour.category}</td>
											<td className="max-w-48 truncate">
												{tour.activity_level}
											</td>
											<td className="text-gray-400">
												<div className="mx-auto flex items-center gap-0.5">
													<button className="rounded p-1 hover:bg-gray-200 hover:text-gray-600">
														<PencilSquareIcon className="inline-block h-5 w-5" />
													</button>
													<button className="rounded p-1 hover:bg-gray-200 hover:text-gray-600">
														<TrashIcon className="inline-block h-5 w-5" />
													</button>
													<button className="rounded p-1 hover:bg-gray-200 hover:text-gray-600">
														<EyeIcon className="inline-block h-5 w-5" />
													</button>
												</div>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</Card>
			</Container>
		</>
	)
}

const layout: LayoutType = (page) => <DashboardLayout children={page} />
ListTours.layout = layout

export default ListTours
