import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import { Input } from '@/components/atoms/Input'
import { InputCounter } from '@/components/atoms/InputCounter'
import SelectInput from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'
import { useCounter } from '@/hooks/useCounter'
import { useForm } from '@inertiajs/react'
import { useEffect } from 'react'

const countryOptions = [
	{
		label: 'United States',
		value: 'united-states'
	},
	{
		label: 'Perú',
		value: 'peru'
	}
]
interface Props {
	code: string
}

interface FormDataType {
	startDate?: string
	country?: string
	travelers: number
	tour: string
}

export const ReservationCard = ({ code }: Props) => {
	const { data, setData, get, processing } =
		useForm<FormDataType>({
			startDate: '',
			country: '',
			travelers: 2,
			tour: code
		})

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		get(route('booking'))
	}

	const travelersCounter = useCounter({ min: 1, max: 30, defaultValue: 2 })

	useEffect(() => {
		setData('travelers', travelersCounter.counter)
	}, [travelersCounter.counter])

	return (
		<div className="w-96 overflow-hidden rounded-lg shadow-md">
			<div className="bg-primary px-8 py-4 text-center text-lg text-white">
				From <span className="text-2xl font-bold">$2199</span> / per person
			</div>
			<form
				className="flex flex-col gap-3 bg-white px-8 py-8"
				onSubmit={submitForm}
			>
				<Label text="Start Date" className="font-bold" fullWidth>
					<Input
						type="date"
						value={data.startDate}
						onChange={(e) => {
							setData('startDate', e.target.value)
						}}
						required
					/>
				</Label>

				<Label text="Country" className="font-bold" fullWidth>
					<SelectInput
						value={data.country}
						options={countryOptions}
						onChange={(e) => {
							setData('country', e.target.value)
						}}
					/>
				</Label>

				<Label text="Num Travellers" className="font-bold" fullWidth>
					<InputCounter
						counter={travelersCounter.counter}
						decrementCounter={travelersCounter.decrementCounter}
						incrementCounter={travelersCounter.incrementCounter}
						handleChange={travelersCounter.handleChange}
					/>
				</Label>

				<ButtonPrimary type="submit" fullWidth>
					{processing === true ? 'Book Now!' : 'Loading...'}
				</ButtonPrimary>
			</form>
		</div>
	)
}
