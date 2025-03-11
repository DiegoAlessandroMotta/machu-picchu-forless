interface User {
	id: number
	name: string
	email: string
	email_verified_at?: string
}

type PageProps<T extends Record<string, unknown> = Record<string, unknown>> =
	T & {
		auth: {
			user: User
		}
	}

interface InputSelectOption {
	value: string
	label: string
}

interface ReservationSummaryType {
	pricePerPerson?: number
	tour?: string
	typeService?: string
	travelDate?: string
	alternativeDate?: string
	numberOfTravellers?: number
	total?: number
}

interface BookingInformationForm {
	package: string
	fullName: string
	email: string
	serviceType: string
	country: string
	startDate: Date
	alternativeDate: Date
	Travellers: {
		firstName: string
		lastName: string
		gender: string
		birhtdayDate: Date
		docType: string
		docNumber: string
		foodRestrictions: string
	}[]
	aditionalDescription: string
	temporalName: string
}

type LayoutType = (page: React.ReactNode) => JSX.Element

interface HeadProps {
	title?: string
	description?: string
	imgUrl?: string
	url?: string
}

interface Tour {
	id: number
	code: string
	name: string
	price: string
	days: number
	nights: number
	description: string | null
	main_banner: string
	max_altitude: string
	service_type_id: number
	category_id: number
	activity_level_id: number
	service_type: string
	category: string
	activity_level: string
}

interface Gender {
	id: number
	code: string
	name: string
}

interface DocType {
	id: number
	code: string
	name: string
}

interface Country {
	id: number
	code: string
	name: string
}

interface Traveler {
	id: number
	first_name: string
	last_name: string
	birth_date: string
	document_number: string
	allergic: string
	gender_id: string
	document_type_id: string
}

type TravelerKey = keyof Traveler

interface ReservationForm {
	full_name: string
	email: string
	phone: string
	country_id: string
	start_date: string
	alternative_date: string
	extra_date: Date | null
	additional_info: string
	heard_about_us: string
	reservation_state_id: string
	customer_id: string
	tour_code: string
	package_id: string
	travelers: Traveler[]
	reservation_policies: boolean
}
