import { AppLogo } from '@/components/icons/AppLogo'
import { Link } from '@inertiajs/react'
import BaseLayout from './BaseLayout'
import { LayoutProps } from '@/types/export'

export default function Guest({
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
			<div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
				<div>
					<Link href="/">
						<AppLogo.base className="h-20 fill-current text-gray-500" />
					</Link>
				</div>

				<div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
					{children}
				</div>
			</div>
		</BaseLayout>
	)
}
