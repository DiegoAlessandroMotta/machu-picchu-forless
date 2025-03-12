import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const debounce = (callback: (...args: any[]) => void, delay: number) => {
	let timeoutId: NodeJS.Timeout | null = null
	return (...args: any) => {
		if (timeoutId) clearTimeout(timeoutId)
		timeoutId = setTimeout(() => {
			callback(...args)
		}, delay)
	}
}

export const truncateText = (text: string, wordLimit: number) => {
	const words = text.split(' ')
	if (words.length > wordLimit) {
		return words.slice(0, wordLimit).join(' ') + '...'
	}
	return text
}

export const chunks = <T>(arr: T[], chunkSize: number) => {
	const chunksArray = []

	for (let i = 0; i < arr.length; i += chunkSize) {
		chunksArray.push(arr.slice(i, i + chunkSize))
	}

	return chunksArray
}
