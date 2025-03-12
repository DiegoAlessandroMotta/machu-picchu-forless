import { defaultPageMetaTags, siteUrl } from '@/consts'
import { Head } from '@inertiajs/react'

export const CustomHead = ({
	title = defaultPageMetaTags.title,
	description = defaultPageMetaTags.description,
	imgUrl = defaultPageMetaTags.imageUrl,
	url = siteUrl,
	noIndex = false
}: HeadProps) => {
	return (
		<>
			{title !== undefined && (
				<Head>
					<title>{title}</title>
				</Head>
			)}

			{title !== undefined && noIndex !== true && (
				<Head>
					<meta property="og:title" content={title} />
					<meta name="twitter:title" content={title} />
				</Head>
			)}

			{description !== undefined && (
				<Head>
					<meta name="description" content={description} />
				</Head>
			)}

			{description !== undefined && noIndex !== true && (
				<Head>
					<meta property="og:description" content={description} />
					<meta name="twitter:description" content={description} />
				</Head>
			)}

			{url !== undefined && noIndex !== true && (
				<Head>
					<meta property="og:url" content={url} />
					<meta property="twitter:url" content={url} />
				</Head>
			)}

			{imgUrl !== undefined && noIndex !== true && (
				<Head>
					<meta property="og:image" content={imgUrl} />
					<meta name="twitter:image" content={imgUrl} />
				</Head>
			)}

			{noIndex === true && (
				<Head>
					<meta name="robots" content="noindex, nofollow" />
				</Head>
			)}
		</>
	)
}
