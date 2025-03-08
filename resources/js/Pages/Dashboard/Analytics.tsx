import DashboardLayout from '@/layouts/DashboardLayout'

export default function Analytics() {
	return (
		<DashboardLayout title="Analytics">
			<div className="py-6">
				<div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
					<header className="">
						<h1 className="text-3xl font-semibold">Analytics</h1>
					</header>
					<div>This is the content</div>
				</div>
			</div>
		</DashboardLayout>
	)
}
