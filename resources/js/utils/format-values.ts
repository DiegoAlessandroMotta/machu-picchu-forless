import { Validators } from './validators'

export const formatInputDateValue = (dateString: string) => {
	if (!Validators.date(dateString)) {
		return
	}

	const [year, month, day] = dateString.split('-').map((num) => parseInt(num))

	const dateUTC = new Date(Date.UTC(year, month - 1, day + 1))

	const utcDateString = dateUTC.toISOString()

	const storedDateUTC = new Date(utcDateString)

	const localDateString = storedDateUTC.toLocaleDateString('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	})

	return localDateString
}

export const formatUrlCode = (value: string) => {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '')
}
