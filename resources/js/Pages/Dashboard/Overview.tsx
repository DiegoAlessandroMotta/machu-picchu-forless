import { Container } from '@/dashboard/components/Container'
import { Header } from '@/dashboard/components/Header'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { CustomHead } from '@/layouts/CustomHead'

const Dashboard = () => {
	return (
		<>
			<CustomHead title="Dashboard" />
			<Container>
				<Header title="Overview" />
			</Container>
		</>
	)
}

Dashboard.layout = (page: React.ReactNode) => (
	<DashboardLayout children={page} />
)

export default Dashboard
