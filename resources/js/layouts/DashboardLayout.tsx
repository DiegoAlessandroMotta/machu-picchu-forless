import { usePage } from '@inertiajs/react'
import { TopBar } from '@/dashboard/components/TopBar'
import { Sidebar } from '@/dashboard/components/Sidebar'
import { SidebarProvider } from '@/dashboard/components/SidebarContext'
import { PropsWithChildren } from 'react'

export const DashboardLayout = ({ children }: PropsWithChildren) => {
	const { user } = usePage<PageProps>().props.auth

	return (
		<SidebarProvider>
			<div className="flex h-dvh flex-nowrap overflow-hidden">
				<Sidebar />
				<div className="flex-grow overflow-y-auto overflow-x-hidden bg-white text-zinc-900">
					<TopBar user={user} />
					<main>{children}</main>
				</div>
			</div>
		</SidebarProvider>
	)
}
