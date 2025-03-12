import { SVGAttributes } from 'react'

export function HomeFilled(props: SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			viewBox="0 0 512 512"
			strokeWidth={1.5}
			stroke="currentColor"
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M256 64L64 217.6V448h149.333V320h85.334v128H448V217.6z"
			></path>
		</svg>
	)
}
