import { cn } from '@/utils/utils'
import { SelectHTMLAttributes } from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	options: InputSelectOption[]
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
	defaultValue?: string
	defaultOptionText?: string
	isControlled?: boolean
	className?: string
}

export const SelectInput = ({
	options,
	value,
	onChange,
	defaultValue,
	defaultOptionText,
	isControlled = false,
	className,
	...props
}: Props) => {
	return (
		<select
			className={cn(
				'block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none',
				'focus:border-blue-200 focus:ring-2 focus:ring-blue-200',
				className
			)}
			value={isControlled ? value : undefined}
			onChange={onChange}
			defaultValue={!isControlled ? defaultValue : undefined}
			{...props}
		>
			<option key="default-select-option" value="" disabled>
				{defaultOptionText !== undefined
					? defaultOptionText
					: 'Select an option'}
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
}
