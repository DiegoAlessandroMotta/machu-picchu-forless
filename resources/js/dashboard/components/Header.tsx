import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	title: string
}

export const Header = ({ title, children }: Props) => {
	return (
		<header className="flex flex-wrap items-center justify-between">
			<h2 className="text-2xl font-medium">{title}</h2>
			<div>{children}</div>
		</header>
	)
}
