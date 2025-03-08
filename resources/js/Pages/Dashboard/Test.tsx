import DashboardLayout from '@/layouts/DashboardLayout'
import { Head } from '@inertiajs/react'
import { Button } from 'flowbite-react'

export default function Test() {
	return (
		<DashboardLayout>
			<Head title="Dashboard · Test page" />

			<div className="p-4">
				<div className="container mx-auto flex justify-center gap-2">
					<Button color="gray">Click me</Button>

					<Button className="bg-gray-900 transition-colors hover:bg-gray-500">
						Click me
					</Button>

					<button
						type="submit"
						className="block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
					>
						Create tour
					</button>

					<button
						type="reset"
						className="block rounded-lg px-4 py-2 text-sm font-medium outline outline-1 outline-gray-200 transition hover:bg-gray-100"
					>
						Cancel
					</button>
				</div>
			</div>
		</DashboardLayout>
	)
}
