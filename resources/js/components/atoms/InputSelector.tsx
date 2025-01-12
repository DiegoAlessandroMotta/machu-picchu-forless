interface Option<T> extends React.OptionHTMLAttributes<HTMLOptionElement> {
  // value: T
  label: string
}

interface Props<T> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option<T>[]
}

export const InputSelector = <T extends string | number>({
  options,
  ...props
}: Props<T>) => {
  return (
    <select
      {...props}
      className="block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200"
    >
      {options.map((option) => (
        <option key={String(option.value)} {...option}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
