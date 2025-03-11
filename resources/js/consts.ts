import { createTheme } from 'flowbite-react'

export const siteUrl = import.meta.env.VITE_APP_URL ?? window.location.origin

export const defaultPageMetaTags = {
	title: 'Machu Picchu Forless - Packages to Peru',
	description:
		'Discover the heart of Peru with Machu Picchu Forless. Expertly planned Cusco tours. Immerse yourself in culture and breathtaking scenery.',
	imageUrl: siteUrl + '/img/machu-picchu-forless.webp'
}

export const datePickerTheme = createTheme({
	popup: {
		root: {
			base: 'absolute top-10 z-50 block pt-2',
			inline: 'relative top-0 z-auto',
			inner: 'inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700'
		},
		header: {
			base: '',
			title:
				'px-2 py-3 text-center font-semibold text-gray-900 dark:text-white',
			selectors: {
				base: 'mb-2 flex justify-between',
				button: {
					base: 'rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
					prev: '',
					next: '',
					view: ''
				}
			}
		},
		view: {
			base: 'p-1'
		},
		footer: {
			base: 'mt-2 flex space-x-2',
			button: {
				base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-apple-300',
				today:
					'bg-primary text-white hover:bg-apple-600 dark:bg-apple-600 dark:hover:bg-primary',
				clear: 'hidden'
			}
		}
	},
	views: {
		days: {
			header: {
				base: 'mb-1 grid grid-cols-7',
				title:
					'h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400'
			},
			items: {
				base: 'grid w-64 grid-cols-7',
				item: {
					base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
					selected: 'bg-primary text-white hover:bg-apple-600',
					disabled: 'text-gray-500'
				}
			}
		},
		months: {
			items: {
				base: 'grid w-64 grid-cols-4',
				item: {
					base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
					selected: 'bg-primary text-white hover:bg-apple-600',
					disabled: 'text-gray-500'
				}
			}
		},
		years: {
			items: {
				base: 'grid w-64 grid-cols-4',
				item: {
					base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
					selected: 'bg-primary text-white hover:bg-apple-600',
					disabled: 'text-gray-500'
				}
			}
		},
		decades: {
			items: {
				base: 'grid w-64 grid-cols-4',
				item: {
					base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
					selected: 'bg-primary text-white hover:bg-apple-600',
					disabled: 'text-gray-500'
				}
			}
		}
	}
})

export const defaultTraveler: Traveler = {
	id: 1,
	first_name: '',
	last_name: '',
	birth_date: '',
	document_number: '',
	allergic: '',
	gender_id: '',
	document_type_id: ''
}

export const defaultReservation: ReservationForm = {
	full_name: '',
	email: '',
	phone: '',
	country_id: '',
	start_date: '',
	alternative_date: '',
	additional_info: '',
	heard_about_us: '',
	reservation_state_id: '',
	customer_id: '',
	tour_code: '',
	package_id: '',
	reservation_policies: false,
	travelers: [defaultTraveler],
	extra_date: new Date()
}
