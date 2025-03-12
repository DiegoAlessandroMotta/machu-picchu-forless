import { AppLogo } from '@/components/icons/AppLogo'
import { ChartBar } from '@/components/icons/ChartBar'
import { HomeFilled } from '@/components/icons/HomeFilled'
import NavLink from '@/components/NavLink'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Link } from '@inertiajs/react'
import { useSidebar } from './SidebarContext'

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
					<ul className="flex flex-col gap-2 px-4 py-2">
						<h3 className="text-sm font-semibold text-gray-500">Dashboards</h3>
						<li className="contents">
							<NavLink
								href={route('dashboard')}
								active={route().current('dashboard')}
							>
								<HomeFilled className="h-4 w-4" />
								<span className="ml-2">Overview</span>
							</NavLink>
						</li>
						<li className="contents">
							<NavLink
								href={route('dashboard.analitics')}
								active={route().current('dashboard.analitics')}
							>
								<ChartBar className="h-4 w-4" />
								<span className="ml-2">Analytics</span>
							</NavLink>
						</li>
					</ul>
					<ul className="flex flex-col gap-2 px-4 py-2">
						<h3 className="text-sm font-semibold text-gray-500">General</h3>
						<li className="contents">
							<NavLink
								href={route('dashboard.tours.list')}
								active={route().current('dashboard.tours.list')}
							>
								Tours
							</NavLink>
						</li>
						<li className="contents">
							<NavLink
								href={route('dashboard.tours.create')}
								active={route().current('dashboard.tours.create')}
							>
								Create tours
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
