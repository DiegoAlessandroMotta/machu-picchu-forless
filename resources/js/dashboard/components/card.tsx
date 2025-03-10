import { cn } from '@/utils/utils'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	className: string
}

export const Card = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'rounded-xl border border-gray-100 bg-white shadow',
				className
			)}
		>
			{children}
		</div>
	)
}
