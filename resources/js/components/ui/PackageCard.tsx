interface Props {
	title: string
	price: string
	days: number
	description: string
	bgImgUrl: string
	className?: string
}

export const PackageCard = ({
	title,
	price,
	days,
	description,
	bgImgUrl,
	className = ''
}: Props) => {
	return (
		<article
			className={`relative flex h-80 items-stretch overflow-hidden rounded-md shadow-md lg:h-96 ${className}`}
		>
			<div
				className="w-full overflow-x-hidden"
				style={{
					background: `linear-gradient(180deg, #027A7C 0%, rgba(0, 0, 0, 0.00) 80%), url(${bgImgUrl}) lightgray 50% / cover no-repeat`
				}}
			></div>

			<div className="ml-[-100%] flex w-full flex-col items-center gap-4 px-3 py-6 text-center text-white">
				<h3 className="text-2xl font-bold uppercase lg:text-3xl">{title}</h3>
				<div className="flex items-center gap-2">
					<span className="rounded-full bg-primary px-4 py-1 font-semibold">
						{days} Days
					</span>
					<span>From ${price}</span>
				</div>
				<p className="text-lg">{description}</p>
			</div>
		</article>
	)
}
