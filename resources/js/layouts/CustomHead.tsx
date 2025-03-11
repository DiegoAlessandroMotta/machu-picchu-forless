import { defaultPageMetaTags, siteUrl } from '@/consts'
import { Head } from '@inertiajs/react'

export const CustomHead = ({
	title = defaultPageMetaTags.title,
	description = defaultPageMetaTags.description,
	imgUrl = defaultPageMetaTags.imageUrl,
	url = siteUrl
}: HeadProps) => {
	return (
		<>
			{title !== undefined && (
				<Head>
					<title>{title}</title>
					<meta property="og:title" content={title} />
					<meta name="twitter:title" content={title} />
				</Head>
			)}

			{description !== undefined && (
				<Head>
					<meta name="description" content={description} />
					<meta property="og:description" content={description} />
					<meta name="twitter:description" content={description} />
				</Head>
			)}

			{url !== undefined && (
				<Head>
					<meta property="og:url" content={url} />
					<meta property="twitter:url" content={url} />
				</Head>
			)}

			{imgUrl !== undefined && (
				<Head>
					<meta property="og:image" content={imgUrl} />
					<meta name="twitter:image" content={imgUrl} />
				</Head>
			)}
		</>
	)
}
