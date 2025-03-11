import { useState, useCallback, useMemo } from 'react'

interface UseCounterProps {
	min?: number
	max?: number
	defaultValue?: number
}

export const useCounter = ({
	min = 0,
	max = 100,
	defaultValue = min
}: UseCounterProps) => {
	const [counter, setCounter] = useState<number>(defaultValue)

	const minValue = useMemo(() => min, [min])
	const maxValue = useMemo(() => max, [max])

	const decrementCounter = () => {
		setCounter((prev) => Math.max(prev - 1, minValue))
	}

	const incrementCounter = () => {
		setCounter((prev) => Math.min(prev + 1, maxValue))
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		if (!isNaN(newValue) && newValue >= minValue && newValue <= maxValue) {
			setCounter(newValue)
		}
	}

	const resetCounter = useCallback(() => {
		setCounter(defaultValue)
	}, [defaultValue])

	return {
		counter,
		decrementCounter,
		incrementCounter,
		handleChange,
		resetCounter
	}
}
