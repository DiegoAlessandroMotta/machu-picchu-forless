import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import { PackageInformation } from '@/components/sections/booking/PackageInformation'
import { ReservationSummary } from '@/components/sections/booking/ReservationSummary'
import { TravellersInformation } from '@/components/sections/booking/TravellersInformation'
import { ExtraInformation } from '@/components/sections/tour/ExtraInformation'
import { defaultReservation } from '@/consts'
import MainLayout from '@/layouts/MainLayout'
import { Head, useForm } from '@inertiajs/react'
import { useCallback } from 'react'

interface Props extends PageProps {
	tours: Tour[]
	genders: Gender[]
	documentTypes: DocType[]
	countries: Country[]
}

const Booking = ({ tours, genders, documentTypes, countries }: Props) => {
	const { data, setData, post, processing /*, errors, reset, clearErrors */ } =
		useForm<ReservationForm>(defaultReservation)

	const setTour = useCallback(
		(tourId: string) => {
			setData('tour_id', tourId)
		},
		[setData]
	)

	const setFullName = useCallback(
		(fullName: string) => {
			setData('full_name', fullName)
		},
		[setData]
	)

	const setCountry = useCallback(
		(countryId: string) => {
			setData('country_id', countryId)
		},
		[setData]
	)

	const setEmail = useCallback(
		(email: string) => {
			setData('email', email)
		},
		[setData]
	)

	const setPhone = useCallback(
		(phone: string) => {
			setData('phone', phone)
		},
		[setData]
	)

	const setStartDate = useCallback(
		(date: string) => {
			setData('start_date', date)
		},
		[setData]
	)

	const setAlternativeDate = useCallback(
		(date: string) => {
			setData('alternative_date', date)
		},
		[setData]
	)

	const setExtraDate = useCallback(
		(date: Date | null) => {
			setData('extra_date', date)
		},
		[setData]
	)

	const setAditionalInfo = useCallback(
		(data: string) => {
			setData('additional_info', data)
		},
		[setData]
	)

	const setHeardAboutUs = useCallback(
		(data: string) => {
			setData('heard_about_us', data)
		},
		[setData]
	)

	const setReservationPolicies = useCallback(
		(value: boolean) => {
			setData('reservation_policies', value)
		},
		[setData]
	)

	const setTravelers = useCallback(
		(travelers: Traveler[]) => {
			setData('travelers', travelers)
		},
		[setData]
	)

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		// eslint-disable-next-line no-console
		console.log(data)

		post(route('reservation.create'), {
			preserveScroll: true,
			onSuccess: () => {
				// eslint-disable-next-line no-console
				console.log('Valid input')
				// reset()
			},
			onError: (errors) => {
				// eslint-disable-next-line no-console
				console.error(errors)
			}
		})
	}

	return (
		<>
			<Head title="Machu Picchu Forless" />
			<MainLayout>
				<div className="px-4 md:px-8">
					<div className="mx-auto grid max-w-layout gap-x-8 gap-y-16 py-8 lg:grid-cols-[60fr,_40fr]">
						<form className="flex flex-col gap-8" onSubmit={submitForm}>
							<PackageInformation
								tours={tours}
								countries={countries}
								setTour={setTour}
								setFullName={setFullName}
								setCountry={setCountry}
								setEmail={setEmail}
								setPhone={setPhone}
								setStartDate={setStartDate}
								setAlternativeDate={setAlternativeDate}
								setExtraDate={setExtraDate}
								data={data}
							/>
							<TravellersInformation
								documentTypes={documentTypes}
								genders={genders}
								setTravelers={setTravelers}
								travelers={data.travelers}
							/>
							<ExtraInformation
								setAditionalInfo={setAditionalInfo}
								setHeardAboutUs={setHeardAboutUs}
								setReservationPolicies={setReservationPolicies}
								data={data}
							>
								<ButtonPrimary type="submit" disabled={processing}>
									Send and Pay
								</ButtonPrimary>
							</ExtraInformation>
						</form>
						<ReservationSummary
							tours={tours}
							tourId={data.tour_id}
							startDate={data.start_date}
							alternativeDate={data.alternative_date}
							numberOfTravelers={data.travelers.length}
						/>
					</div>
				</div>
			</MainLayout>
		</>
	)
}

export default Booking
