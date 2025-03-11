interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	col?: boolean
	fullWidth?: boolean
}

export const ButtonPrimary = ({
	children,
	col,
	fullWidth,
	...props
}: Props) => {
	return (
		<button
			className={`flex ${col ? 'flex-col' : 'flex-row'} ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 font-semibold text-white`}
			{...props}
		>
			{children}
		</button>
	)
}
