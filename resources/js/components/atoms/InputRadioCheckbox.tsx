interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	type: 'radio' | 'checkbox'
}

export const InputRadioCheckbox = ({ ...props }: Props) => {
	return (
		<input
			className="block border border-gray-500 bg-white text-primary outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200"
			{...props}
		/>
	)
}
