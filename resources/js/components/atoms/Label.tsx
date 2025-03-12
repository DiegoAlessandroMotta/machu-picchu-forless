import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	text?: string
	row?: boolean
	className?: string
	textEnd?: boolean
	fullWidth?: boolean
	verticalCentered?: boolean
	error?: string
}

export const Label = ({
	children,
	text,
	className,
	row,
	textEnd,
	fullWidth,
	verticalCentered,
	error
}: Props) => {
	return (
		<label
			className={`flex gap-1.5 text-neutral-700 ${row ? 'flex-row' : 'flex-col'} ${fullWidth ? 'w-full' : 'w-fit'} ${verticalCentered ? 'items-center' : ''}`}
		>
			{text && !textEnd && <span className={className}>{text}</span>}
			{children}
			{text && textEnd && <span className={className}>{text}</span>}
			{error !== undefined && (
				<span className="text-sm text-red-500">{error}</span>
			)}
		</label>
	)
}
