import { Container } from '@/dashboard/components/Container'
import { Header } from '@/dashboard/components/Header'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { CustomHead } from '@/layouts/CustomHead'

const Analytics = () => {
	return (
		<>
			<CustomHead title="Analytics" noIndex />
			<Container>
				<Header title="Analytics" />
			</Container>
		</>
	)
}

const layout: LayoutType = (page) => <DashboardLayout children={page} />
Analytics.layout = layout

export default Analytics
