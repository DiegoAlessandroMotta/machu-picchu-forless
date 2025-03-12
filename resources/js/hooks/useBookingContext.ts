import { BookingContext } from '@/context/BookingContext'
import { useContext } from 'react'

export const useBookingContext = () => {
	const bookingInformation = useContext<BookingInformationForm | undefined>(
		BookingContext
	)

	if (bookingInformation === undefined) {
		throw new Error('useBookingContext must be used with a BookingContext')
	}

	return bookingInformation
}
