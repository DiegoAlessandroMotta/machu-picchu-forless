import { EyeIcon } from '@/components/icons/EyeIcon'
import { PencilSquareIcon } from '@/components/icons/PencilSquareIcon'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { TrashIcon } from '@/components/icons/TrashIcon'
import { Button } from '@/dashboard/components/Button'
import { Card } from '@/dashboard/components/card'
import { Container } from '@/dashboard/components/Container'
import { Header } from '@/dashboard/components/Header'
import { SearchInput } from '@/dashboard/components/SearchInput'
import { CustomHead } from '@/layouts/CustomHead'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { Link } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

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

interface Props {
	categories: TourCategory[]
}

const ListCategories = ({ categories }: Props) => {
	return (
		<>
			<CustomHead title="List Categories" noIndex />
			<Container>
				<Header title="Categories">
					<Link href={route('dashboard.categories.create')} prefetch>
						<Button.Base text="Add" icon={<PlusIcon className="h-5 w-5" />} />
					</Link>
				</Header>

				<Card className="overflow-hidden">
					<div className="border-b px-4 py-6">
						<SearchInput placeholder="Search tours" fullWidth />
					</div>
					<div className="overflow-x-auto">
						<table className="w-full min-w-[512px] table-auto text-sm">
							<thead className="border-b bg-gray-100 text-gray-700">
								<tr className="[&>th]:p-4 [&>th]:text-start">
									<th>Name</th>
									<th>Slug</th>
									<th>Total tours</th>
									<th></th>
								</tr>
							</thead>
							<tbody className="divide-y text-gray-500">
								{categories !== undefined &&
									categories.length > 0 &&
									categories.map((category) => (
										<tr
											key={category.id}
											className="transition-colors hover:bg-gray-50"
										>
											<td className="max-w-64 truncate p-4">{category.name}</td>
											<td className="p-4">{category.code}</td>
											<td className="p-4">{category.total_tours}</td>
											<td className="text-gray-400">
												<div className="flex items-center justify-center gap-0.5 pr-4">
													<OptionButton>
														<PencilSquareIcon className="inline-block h-5 w-5" />
													</OptionButton>
													<OptionButton>
														<TrashIcon className="inline-block h-5 w-5" />
													</OptionButton>
													<a
														href={route('web.tourcategories.show', {
															id: category.code
														})}
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
						{categories !== undefined && categories.length < 1 && (
							<div className="p-4 text-center font-medium text-gray-700">
								No results
							</div>
						)}
					</div>
				</Card>
			</Container>
		</>
	)
}

const layout: LayoutType = (page) => <DashboardLayout children={page} />
ListCategories.layout = layout

export default ListCategories
