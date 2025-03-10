import { Container } from '@/dashboard/components/Container'
import { Header } from '@/dashboard/components/Header'
import AuthenticatedLayout from '@/layouts/DashboardLayout'

export default function Dashboard() {
	return (
		<AuthenticatedLayout title='Dashboard'>
			<Container>
				<Header title="Overview" />
			</Container>
		</AuthenticatedLayout>
	)
}
