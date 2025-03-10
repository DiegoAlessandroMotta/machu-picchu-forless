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
	data: ReservationSummaryType
}

export const ReservationSummary = ({ data }: Props) => {
	const {
		pricePerPerson = 0,
		tour = '',
		typeService = '',
		travelDate = '',
		alternativeDate = '',
		numberOfTravellers = 1,
		total = 0
	} = data

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
					<CustomLabel label="Tour:" value={tour} />
					<CustomLabel label="Type Service:" value={typeService} />
					<CustomLabel label="Travel Date:" value={travelDate} />
					<CustomLabel label="Alternative Date:" value={alternativeDate} />
					<CustomLabel
						label="Number of Travellers:"
						value={numberOfTravellers}
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
