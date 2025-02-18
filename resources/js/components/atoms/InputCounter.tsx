import { MinusIcon } from '@/components/icons/MinusIcon'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { useCallback, useMemo, useState } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number
  max?: number
  defaultValue?: number
}

export const InputCounter = ({
  min,
  max,
  type,
  defaultValue,
  ...rest
}: Props) => {
  const [counter, setCounter] = useState<number>(defaultValue ?? min ?? 1)
  const minValue = useMemo(() => min ?? 1, [])
  const maxValue = useMemo(() => max ?? 100, [])

  const decrementCounter = useCallback(() => {
    setCounter((prev) => Math.max(prev - 1, minValue))
  }, [counter])

  const incrementCounter = useCallback(() => {
    setCounter((prev) => Math.min(prev + 1, maxValue))
  }, [counter])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    if (!isNaN(newValue) && newValue >= minValue && newValue <= maxValue) {
      setCounter(newValue)
    }
  }, [])

  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded-full border border-gray-300 p-1"
        onClick={decrementCounter}
        type="button"
        aria-label="Decrement"
      >
        <MinusIcon className="h-5 w-5 flex-shrink-0 text-neutral-700" />
      </button>
      <input
        type="number"
        value={counter}
        min={minValue}
        max={maxValue}
        onChange={handleChange}
        className="hide-arrows rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-center text-gray-900 outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200"
        {...rest}
      />
      <button
        className="rounded-full border border-gray-300 p-1"
        onClick={incrementCounter}
        type="button"
        aria-label="Increment"
      >
        <PlusIcon className="h-5 w-5 flex-shrink-0 text-neutral-700" />
      </button>
    </div>
  )
}
