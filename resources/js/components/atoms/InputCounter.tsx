// import { useCounter } from '@/hooks/useCounter'
import { MinusIcon } from '@/components/icons/MinusIcon'
import { PlusIcon } from '@/components/icons/PlusIcon'

interface Props {
	min?: number
	max?: number
	// defaultValue?: number
	counter: number
	decrementCounter: () => void
	incrementCounter: () => void
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	fullWidth?: boolean
}

export const InputCounter = ({
	min = 0,
	max = 100,
	// defaultValue,
	counter,
	decrementCounter,
	incrementCounter,
	handleChange,
	fullWidth
	// ...rest
}: Props) => {
	// const { counter, decrementCounter, incrementCounter, handleChange } =
	//   useCounter({ min, max, defaultValue })

	return (
		<div
			className={`flex items-center gap-2 ${fullWidth ? 'w-full' : 'w-fit'}`}
			onClick={(event) => {
				event.preventDefault()
			}}
		>
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
				min={min}
				max={max}
				onChange={handleChange}
				className="hide-arrows rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-center text-gray-900 outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200"
				// {...rest}
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
