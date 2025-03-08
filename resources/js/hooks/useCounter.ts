import { useCallback, useMemo, useState } from 'react'

interface UseCounterProps {
  min?: number
  max?: number
  defaultValue?: number
}

export const useCounter = ({ min, max, defaultValue }: UseCounterProps) => {
  const [counter, setCounter] = useState<number>(defaultValue ?? min ?? 1)
  const minValue = useMemo(() => min ?? 1, [min])
  const maxValue = useMemo(() => max ?? 100, [max])

  const decrementCounter = useCallback(() => {
    setCounter((prev) => Math.max(prev - 1, minValue))
  }, [minValue])

  const incrementCounter = useCallback(() => {
    setCounter((prev) => Math.min(prev + 1, maxValue))
  }, [maxValue])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    if (!isNaN(newValue) && newValue >= minValue && newValue <= maxValue) {
      setCounter(newValue)
    }
  }, [minValue, maxValue])

  const resetCounter = useCallback(() => {
    setCounter(defaultValue ?? min ?? 1)
  }, [defaultValue, min])


  return { counter, decrementCounter, incrementCounter, handleChange, resetCounter }
}
