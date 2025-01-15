interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  widthFit?: boolean
}

export const InputDate = ({ widthFit, ...props }: Props) => {
  return (
    <input
      className={`block border border-gray-300 bg-white text-current outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200 ${widthFit ? 'w-fit' : 'w-full'} rounded-md px-2.5 py-1.5`}
      type="date"
      {...props}
    />
  )
}
