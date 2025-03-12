interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: Props) => {
	return (
		<input
			className={`block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none placeholder:text-zinc-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-200`}
			type="text"
			{...props}
		/>
	)
}
