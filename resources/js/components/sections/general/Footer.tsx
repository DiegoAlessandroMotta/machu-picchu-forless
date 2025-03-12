import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'

export const Footer = () => {
	return (
		<footer className="mt-36 bg-dark px-4 md:px-8">
			<div className="mx-auto flex max-w-layout flex-col gap-6 py-8">
				<div className="mb-16 flex flex-wrap justify-around gap-16 text-white">
					{/* <div className="mb-16 grid gap-4 text-white md:grid-cols-2 lg:grid-cols-4 md:justify-items-center"> */}
					<div>
						<h3 className="mb-4 text-lg font-semibold text-primary">
							Tour Packages
						</h3>
						<ul className="flex flex-col gap-2">
							<li>
								<a href="#">Tour Packages</a>
							</li>
							<li>
								<a href="#">All Peru Tours</a>
							</li>
							<li>
								<a href="#">Machu Picchu Tours</a>
							</li>
							<li>
								<a href="#">Hiking & Trekking Tours</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold text-primary">
							Destination
						</h3>
						<ul className="flex flex-col gap-2">
							<li>
								<a href="#">Travel Guides</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold text-primary">
							About us
						</h3>
						<ul className="flex flex-col gap-2">
							<li>
								<a href="#">About us</a>
							</li>
							<li>
								<a href="#">Hotels</a>
							</li>
							<li>
								<a href="#">Reviews</a>
							</li>
							<li>
								<a href="#">Work for us</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold text-primary">
							Contact us
						</h3>
						<ul className="flex flex-col gap-2">
							<li>
								<a href="#">About us</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mx-auto h-0.5 w-full bg-primary"></div>

				<form className="flex items-stretch justify-center">
					<input
						className={`block rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none placeholder:text-zinc-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-200`}
						type="email"
						placeholder="Enter your email"
					/>
					<button type="submit" className="rounded-r-md bg-primary px-2">
						<ArrowRightIcon className="h-8 w-8 text-white" />
					</button>
				</form>
			</div>
		</footer>
	)
}
