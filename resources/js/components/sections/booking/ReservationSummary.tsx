interface PropsShowValue {
	label: string
	value: string | number
}

const CustomLabel = ({ label, value }: PropsShowValue) => {
	return (
		<div className="flex gap-2">
			<span className="font-semibold">{label}</span>
			<span>{value}</span>
		</div>
	)
}

interface Props {
	tours: Tour[]
	tourCode: ReservationForm['tour_code']
	startDate: string
	alternativeDate: string
	numberOfTravelers: number
}

export const ReservationSummary = ({
	tours,
	tourCode,
	startDate,
	alternativeDate,
	numberOfTravelers
}: Props) => {
	const currentTour = tours.find((tour) => String(tour.code) === tourCode)
	const pricePerPerson =
		currentTour !== undefined ? Number(currentTour.price) : 0
	const name = currentTour !== undefined ? currentTour.name : ''
	const serviceType = currentTour !== undefined ? currentTour.service_type : ''
	const total = pricePerPerson * numberOfTravelers

	return (
		<section className="mx-auto flex h-fit w-full flex-col gap-4 rounded-lg bg-white shadow-md md:w-fit lg:min-w-96">
			<div className="flex flex-col px-6 pt-8">
				<header className="mb-4 text-center">
					{pricePerPerson > 0 && (
						<p>
							From{' '}
							<span className="text-xl font-bold">
								${pricePerPerson.toFixed(2)}
							</span>{' '}
							per person
						</p>
					)}
					<h3 className="text-2xl font-bold text-secondary">
						Reservation Summary
					</h3>
				</header>

				<div className="flex flex-col gap-2">
					<CustomLabel label="Tour:" value={name} />
					<CustomLabel label="Type Service:" value={serviceType} />
					<CustomLabel label="Travel Date:" value={startDate} />
					<CustomLabel label="Alternative Date:" value={alternativeDate} />
					<CustomLabel
						label="Number of Travellers:"
						value={numberOfTravelers}
					/>
				</div>
			</div>

			<div className="flex justify-between border-t border-[#dee2e6] px-6 py-4 font-bold">
				<span>Total:</span>
				<span>${total.toFixed(2)} USD</span>
			</div>
		</section>
	)
}
