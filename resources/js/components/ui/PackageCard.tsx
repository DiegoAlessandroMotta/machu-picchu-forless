import { truncateText } from '@/utils/utils'

interface Props {
	title: string
	price: string
	days: number
	description: string
	bgImgUrl: string
}

export const PackageCard = ({
	title,
	price,
	days,
	description,
	bgImgUrl
}: Props) => {
	const truncatedDescription = truncateText(description, 15)

	return (
		<article className="flex h-80 items-stretch overflow-hidden rounded-md shadow-md lg:h-96">
			<div
				className="flex w-full flex-col items-center gap-4 px-3 py-6 text-center text-white"
				style={{
					background: `linear-gradient(180deg, #027A7C 0%, rgba(0, 0, 0, 0.00) 70%), url(${bgImgUrl}) #dddddd 50% / cover no-repeat`
				}}
			>
				<h3 className="text-2xl font-bold uppercase">{title}</h3>
				<div className="flex flex-wrap items-center justify-center gap-2">
					<span className="text-nowrap rounded-full bg-primary px-4 py-1 font-medium">
						{days} Days
					</span>
					<span>From ${price}</span>
				</div>
				<p>{truncatedDescription}</p>
			</div>
			{/* <div className="flex justify-end">
				<button>View tour {'->'}</button>
			</div> */}
		</article>
	)
}
