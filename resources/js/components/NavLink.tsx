import { useSidebar } from '@/dashboard/components/SidebarContext'
import { InertiaLinkProps, Link } from '@inertiajs/react'

export default function NavLink({
	active = false,
	className = '',
	children,
	...props
}: InertiaLinkProps & { active: boolean }) {
	const { setOpen } = useSidebar()

	return (
		<Link
      onClick={() => {setOpen(false)}}
			{...props}
			className={
				'inline-flex items-center rounded-md px-4 py-2.5 text-sm font-semibold leading-5 transition duration-150 ease-in-out focus:outline-none ' +
				(active
					? 'bg-gray-700 text-white focus:bg-gray-700'
					: 'text-gray-400 hover:bg-white/5 hover:text-gray-100 focus:border-gray-700 focus:text-gray-300') +
				className
			}
			prefetch
		>
			{children}
		</Link>
	)
}
