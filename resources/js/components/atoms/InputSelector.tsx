import { useMemo, useState } from 'react'

interface Option extends React.OptionHTMLAttributes<HTMLOptionElement> {
	label: string
	value: string | number
}

interface Props {
	options: Option[]
	showDefaultDisabledOption?: boolean
	defaultOptionText?: string
	defaultValue?: string
}

interface InputSelectorProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	showDefaultDisabledOption?: boolean
	selectedValue: string
	setSelectedValue: (value: string) => void
	sortedOptions: Option[]
	defaultOption: Option
}

export const useInputSelector = ({
	options,
	showDefaultDisabledOption,
	defaultOptionText,
	defaultValue
}: Props) => {
	const defaultOption = {
		label: defaultOptionText ?? 'Choose an option',
		value: 'default-disabled-option',
		disabled: true
	}

	const computedDefaultValue = (() => {
		if (defaultValue !== undefined && showDefaultDisabledOption) {
			return defaultValue
		}

		return defaultOption.value
	})()

	const [selectedValue, setSelectedValue] = useState(computedDefaultValue)

	const sortedOptions = useMemo(
		() => [...options].sort((a, b) => a.label.localeCompare(b.label)),
		[options]
	)

	return {
		selectedValue,
		setSelectedValue,
		sortedOptions,
		defaultOption
	}
}

export const InputSelector = ({
	showDefaultDisabledOption,
	selectedValue,
	setSelectedValue,
	sortedOptions,
	defaultOption,
	...props
}: InputSelectorProps) => {
	// const { selectedValue, setSelectedValue, sortedOptions, defaultOption } = useInputSelector({
	// 	options,
	// 	showDefaultDisabledOption,
	// 	defaultOptionText,
	// 	defaultValue
	// })

	return (
		<select
			className="block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200"
			value={selectedValue}
			onChange={(e) => setSelectedValue(e.target.value)}
			{...props}
		>
			{showDefaultDisabledOption && (
				<option {...defaultOption}>{defaultOption.label}</option>
			)}

			{sortedOptions.map((option, index) => {
				const { label, ...props } = option

				return (
					<option key={String(option.value) + index} {...props}>
						{label}
					</option>
				)
			})}
		</select>
	)
}
