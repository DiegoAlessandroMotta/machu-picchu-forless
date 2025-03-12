import { SVGAttributes } from 'react'

export const MinusIcon = (props: SVGAttributes<SVGElement>) => {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			{...props}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
		</svg>
	)
}
