import { Input } from '@/components/atoms/Input'
import { SelectInput } from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'
import { datePickerTheme } from '@/consts'
import { Datepicker } from 'flowbite-react'
import { useMemo } from 'react'

interface Props {
	tours: Tour[]
	countries: Country[]
	setTour: (tourId: string) => void
	setFullName: (fullName: string) => void
	setCountry: (countryId: string) => void
	setEmail: (email: string) => void
	setPhone: (phone: string) => void
	setStartDate: (date: string) => void
	setAlternativeDate: (date: string) => void
	setExtraDate: (date: Date | null) => void
	data: ReservationForm
}

export const PackageInformation = ({
	tours,
	countries,
	setTour,
	setFullName,
	setCountry,
	setEmail,
	setPhone,
	setStartDate,
	setAlternativeDate,
	setExtraDate,
	data
}: Props) => {
	const tourOptions = useMemo(() => {
		return tours.map((tour) => ({ value: String(tour.id), label: tour.name }))
	}, [tours])

	const countryOptions = useMemo(() => {
		return countries.map((country) => ({
			value: String(country.id),
			label: country.name
		}))
	}, [countries])

	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-xl font-bold text-secondary">
				Contact Personal Information
			</h2>

			<section className="flex flex-col gap-4 rounded-lg bg-white px-6 py-8 shadow-md md:px-12">
				<Label text="Packages" className="font-semibold" fullWidth>
					<SelectInput
						value={data.tour_id}
						options={tourOptions}
						onChange={(e) => {
							setTour(e.target.value)
						}}
						required
					/>
				</Label>

				<div className="grid gap-4 md:grid-cols-2">
					<Label text="Full Name" className="font-semibold" fullWidth>
						<Input
							value={data.full_name}
							onChange={(e) => {
								setFullName(e.target.value)
							}}
							placeholder="Bill Gates"
							required
						/>
					</Label>

					<Label text="Country" className="font-semibold" fullWidth>
						<SelectInput
							value={data.country_id}
							options={countryOptions}
							onChange={(e) => {
								setCountry(e.target.value)
							}}
							required
						/>
					</Label>
				</div>

				<div className="grid gap-4 md:grid-cols-2">
					{/* <div className="flex flex-col">
						<Label text="Group or private Service" className="font-semibold" />

						<div className="mt-auto flex gap-8 py-2">
							<Label text="Group" textEnd row verticalCentered>
								<InputRadioCheckbox
									type="radio"
									value="group"
									name="serviceType"
									required
								/>
							</Label>

							<Label text="Private" textEnd row verticalCentered>
								<InputRadioCheckbox
									type="radio"
									value="private"
									name="serviceType"
									required
								/>
							</Label>
              </div>
              </div> */}
					<Label text="Email" className="font-semibold" fullWidth>
						<Input
							type="email"
							value={data.email}
							onChange={(e) => {
								setEmail(e.target.value)
							}}
							placeholder="billgs@domain.com"
							required
						/>
					</Label>

					<Label text="Phone number" className="font-semibold" fullWidth>
						<Input
							value={data.phone}
							onChange={(e) => {
								setPhone(e.target.value)
							}}
							placeholder="+1 201716####"
						/>
					</Label>
				</div>

				<div className="grid gap-4 md:grid-cols-2">
					<Label text="Start Date" className="font-semibold" fullWidth>
						<Input
							type="date"
							value={data.start_date}
							onChange={(e) => {
								setStartDate(e.target.value)
							}}
							required
						/>
					</Label>
					<Label text="Alternative Date" className="font-semibold" fullWidth>
						<Input
							type="date"
							value={data.alternative_date}
							onChange={(e) => {
								setAlternativeDate(e.target.value)
							}}
							required
						/>
					</Label>
				</div>

				<div className="grid gap-4 md:grid-cols-2">
					<Label text="Extra Date" className="font-semibold" fullWidth>
						<Datepicker
							className="[&_input]:bg-white"
							theme={datePickerTheme}
							value={data.extra_date}
							onChange={(date) => {
								setExtraDate(date)
							}}
						/>
					</Label>
				</div>
			</section>
		</div>
	)
}
