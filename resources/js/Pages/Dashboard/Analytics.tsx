import { Container } from '@/dashboard/components/Container'
import { Header } from '@/dashboard/components/Header'
import DashboardLayout from '@/layouts/DashboardLayout'

export default function Analytics() {
	return (
		<DashboardLayout title="Analytics">
			<Container>
				<Header title="Analitics" />
			</Container>
		</DashboardLayout>
	)
}
