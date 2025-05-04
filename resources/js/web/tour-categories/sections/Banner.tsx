interface Props {
	title: string
	bgImgUrl: string
}

export const Banner = ({ title, bgImgUrl }: Props) => {
	return (
		<section className="relative flex h-[520px] items-stretch 2xl:h-[620px]">
			<div className="w-full overflow-x-hidden">
				<div
					className="h-full bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url("${bgImgUrl}")` }}
				></div>
			</div>
			<div className="ml-[-100%] w-full bg-[#00000020]"></div>

			<div className="ml-[-100%] flex w-full items-center justify-center text-white">
				<div className="mt-auto w-full px-4 md:px-8">
					<div className="mx-auto flex max-w-layout items-end justify-between py-10">
						<div className="mr-auto flex max-w-[520px] flex-col flex-wrap gap-4 py-4">
							<p className="text-balance text-5xl font-bold">{title}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
