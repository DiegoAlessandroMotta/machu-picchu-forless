import { useEffect } from 'react'
import GLightbox from 'glightbox'
import '@/../css/lightbox.css'

interface Props {
	className?: {
		mainContainer?: string
		imageContainer?: string
		image?: string
	}
	galleryIdentifier: string
	elements: {
		id: string
		title: string
		description: string
		original: string
		thumbnail: string
	}[]
}

export const Gallery = ({ className, galleryIdentifier, elements }: Props) => {
	useEffect(() => {
		GLightbox({
			loop: true,
			selector: `[data-glightbox-id="${galleryIdentifier}"]`
		})
	}, [])

	return (
		<div
			className={
				className?.mainContainer ?? 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
			}
		>
			{elements.map((item) => (
				<div
					className={
						className?.imageContainer ??
						'h-64 overflow-hidden rounded-lg shadow sm:h-80'
					}
					key={item.id}
				>
					<a
						className={`${galleryIdentifier} contents`}
						href={item.original}
						data-title={item.title}
						data-description={item.description}
						data-glightbox-id={galleryIdentifier}
					>
						<img
							className={
								className?.image ??
								'h-full w-full scale-110 object-cover transition-transform duration-500 ease-in-out hover:scale-100'
							}
							src={item.thumbnail}
							alt={item.description}
						/>
					</a>
				</div>
			))}
		</div>
	)
}
