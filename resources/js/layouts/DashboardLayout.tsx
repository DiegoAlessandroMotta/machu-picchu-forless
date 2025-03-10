import { PageProps } from '@/types'
import { usePage } from '@inertiajs/react'
import BaseLayout from '@/layouts/BaseLayout'
import { LayoutProps } from '@/types/export'
import { TopBar } from '@/dashboard/components/TopBar'
import { Sidebar } from '@/dashboard/components/Sidebar'
import { SidebarProvider } from '@/dashboard/components/SidebarContext'

export default function DashboardLayout({
	title,
	description,
	imgUrl,
	url,
	children
}: LayoutProps) {
	const { user } = usePage<PageProps>().props.auth

	return (
		<BaseLayout
			title={title}
			description={description}
			imgUrl={imgUrl}
			url={url}
		>
			<SidebarProvider>
				<div className="flex h-dvh flex-nowrap overflow-hidden">
					<Sidebar />
					<div className="flex-grow overflow-y-auto overflow-x-hidden bg-white text-zinc-900">
						<TopBar user={user} />
						<main>{children}</main>
					</div>
				</div>
			</SidebarProvider>
		</BaseLayout>
	)
}
