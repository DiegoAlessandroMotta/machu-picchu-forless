// import { Gallery } from '@/components/ui/Gallery'
// import { truncateText } from '@/utils/utils'
import { PropsWithChildren } from 'react'

interface Props {
	tourCategory: TourCategory
}

export const Information = ({
	tourCategory,
	children
}: PropsWithChildren<Props>) => {
	// const truncatedDescription = truncateText(tourCategory.description ?? '', 50)

	return (
		<section className="px-4 md:px-8">
			<div className="h-0.5 w-full bg-[#dee2e6]"></div>

			<div className="mx-auto mt-12 grid max-w-layout gap-x-12 gap-y-8 lg:grid-cols-[1fr_auto]">
				<article className="flex flex-col gap-2">
					<h1 className="text-4xl font-bold">{tourCategory.name}</h1>
					{tourCategory.description !== null && (
						<pre
							className="description-content mt-2 text-wrap font-sans font-light leading-6"
							dangerouslySetInnerHTML={{ __html: tourCategory.description }}
						></pre>
					)}
				</article>
				{children && <aside className="flex justify-center">{children}</aside>}
			</div>

			{/* <div className="mx-auto flex max-w-layout flex-col pt-16">
				<Gallery
					galleryIdentifier="tour-images"
					elements={[
						{
							id: String(tourCategory.id),
							title: tourCategory.name,
							description: truncatedDescription,
							original: tourCategory.main_banner,
							thumbnail: tourCategory.main_banner
						}
					]}
				/>
			</div> */}

			<div className="mx-auto mt-12 max-w-layout"></div>
		</section>
	)
}
