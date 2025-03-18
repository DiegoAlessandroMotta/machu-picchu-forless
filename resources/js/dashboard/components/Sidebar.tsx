import { AppLogo } from '@/components/icons/AppLogo'
import { ChartBar } from '@/components/icons/ChartBar'
import { HomeFilled } from '@/components/icons/HomeFilled'
import NavLink from '@/components/NavLink'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Link } from '@inertiajs/react'
import { useSidebar } from './SidebarContext'

interface LinkGroup {
	title: string
	items: {
		href: string
		active: () => boolean
		icon?: JSX.Element
		label: string
	}[]
}

const links: LinkGroup[] = [
	{
		title: 'Dashboards',
		items: [
			{
				href: route('dashboard'),
				active: () => route().current('dashboard'),
				icon: <HomeFilled className="h-4 w-4" />,
				label: 'Overview'
			},
			{
				href: route('dashboard.analitics'),
				active: () => route().current('dashboard.analitics'),
				icon: <ChartBar className="h-4 w-4" />,
				label: 'Analytics'
			}
		]
	},
	{
		title: 'General',
		items: [
			{
				href: route('dashboard.tours.list'),
				active: () => route().current('dashboard.tours.list'),
				label: 'Tours'
			},
			{
				href: route('dashboard.tours.create'),
				active: () => route().current('dashboard.tours.create'),
				label: 'Create tours'
			},
			{
				href: route('dashboard.categories.list'),
				active: () => route().current('dashboard.categories.list'),
				label: 'Categories'
			},
			{
				href: route('dashboard.categories.create'),
				active: () => route().current('dashboard.categories.create'),
				label: 'Create categories'
			}
		]
	}
]

export const Sidebar = () => {
	const isMobile = useIsMobile()
	const { open } = useSidebar()

	return (
		<nav
			className={`h-dvh w-72 min-w-72 overflow-hidden border-gray-100 bg-[#121621] text-white transition-transform duration-300 ${isMobile && !open ? '-translate-x-full' : 'translate-x-0'} ${isMobile ? 'absolute z-10' : ''}`}
		>
			<div className="sticky top-0 mx-auto">
				<div className="flex flex-wrap items-center justify-center gap-2 px-4 pb-2 pt-4 text-white">
					<div className="flex w-full">
						<Link href={route('dashboard')} className="contents" prefetch>
							<AppLogo.Base
								className="h-14"
								birdColor="#63AB45"
								forlessColor="#FFFFFF"
								machuPicchuColor="#027A7C"
							/>
						</Link>
					</div>
				</div>

				<div className="flex flex-col">
					{links.map((section, index) => (
						<ul key={index} className="flex flex-col gap-2 px-4 py-2">
							<h3 className="text-sm font-semibold text-gray-500">
								{section.title}
							</h3>
							{section.items.map((item, idx) => (
								<li key={idx} className="contents">
									<NavLink href={item.href} active={item.active()}>
										{item.icon !== undefined && item.icon}
										<span className="ml-2">{item.label}</span>
									</NavLink>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
		</nav>
	)
}
