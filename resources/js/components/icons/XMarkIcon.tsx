import { SVGAttributes } from 'react'

export const XMarkIcon = (props: SVGAttributes<SVGElement>) => {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			{...props}
		>
			<title>x mark</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18 18 6M6 6l12 12"
			></path>
		</svg>
	)
}
