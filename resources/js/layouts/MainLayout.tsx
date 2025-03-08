import { Footer } from '@/components/sections/general/Footer'
import { Header } from '@/components/sections/general/Header'
import BaseLayout from '@/layouts/BaseLayout'
import { LayoutProps } from '@/types/export'

export default function MainLayout({
	title,
	description,
	imgUrl,
	url,
	children
}: LayoutProps) {
	return (
		<BaseLayout
			title={title}
			description={description}
			imgUrl={imgUrl}
			url={url}
		>
			<div className="bg-[#f3f3f3]">
				<div className="relative flex h-dvh flex-col overflow-y-auto">
					<Header />
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
			</div>
		</BaseLayout>
	)
}
