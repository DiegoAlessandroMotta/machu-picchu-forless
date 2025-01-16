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
  ...props
}: Props) => {
  const defaultOption = {
    label: defaultOptionText ?? 'Choose an option',
    value: 'default-disabled-option',
    disabled: true,
  }

  props.defaultValue = showDefaultDisabledOption
    ? defaultOption.value
    : props.defaultValue

  return (
    <select
      className="block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200"
      {...props}
    >
      {showDefaultDisabledOption && (
        <option {...defaultOption}>{defaultOption.label}</option>
      )}

      {options.map((option, index) => (
        <option key={String(option.value) + index} {...option}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
