import { useMemo } from 'react'

interface Option extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string
  value: string | number
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
  showDefaultDisabledOption?: boolean
  defaultOptionText?: string
}

export const InputSelector = ({
  options,
  showDefaultDisabledOption,
  defaultOptionText,
  defaultValue,
  ...props
}: Props) => {
  const defaultOption = {
    label: defaultOptionText ?? 'Choose an option',
    value: 'default-disabled-option',
    disabled: true
  }

  const computedDefaultValue = (() => {
    if (showDefaultDisabledOption && defaultValue === undefined) {
      return defaultOption.value
    }

    return defaultValue
  })()

  const sortedOptions = useMemo(
    () => [...options].sort((a, b) => a.label.localeCompare(b.label)),
    [options]
  )

  return (
    <select
      className="block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200"
      defaultValue={computedDefaultValue}
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
