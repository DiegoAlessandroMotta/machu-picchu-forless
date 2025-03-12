import Dropdown from '@/components/Dropdown'
// import { SearchIcon } from '@/components/icons/SearchIcon'
import { Bars3Icon } from '@/components/icons/Bars3Icon'
import { SidebarTrigger } from './SidebarContext'

interface Props {
	user: User
}

export const TopBar = ({ user }: Props) => {
	return (
		<div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
			<div className="flex gap-2">
				<SidebarTrigger>
					<button className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 active:bg-gray-200 md:hidden">
						<Bars3Icon className="h-6 w-6" />
					</button>
				</SidebarTrigger>
				{/* <button className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 active:bg-gray-200">
					<SearchIcon className="h-6 w-6" />
				</button> */}
			</div>

			<div className="ms-6 flex items-center">
				<div className="relative ms-3">
					<Dropdown>
						<Dropdown.Trigger>
							<span className="inline-flex rounded-md">
								<button
									type="button"
									className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-700 focus:outline-none active:bg-gray-200"
								>
									{user.name}
									<svg
										className="-me-0.5 ms-2 h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</span>
						</Dropdown.Trigger>

						<Dropdown.Content align="right">
							<Dropdown.Link href={route('profile.edit')}>
								Profile
							</Dropdown.Link>
							<Dropdown.Link href={route('logout')} method="post" as="button">
								Log Out
							</Dropdown.Link>
						</Dropdown.Content>
					</Dropdown>
				</div>
			</div>
		</div>
	)
}
