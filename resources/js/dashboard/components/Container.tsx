import { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
	return (
		<div className="py-6">
			<div className="container mx-auto space-y-6 px-4 md:px-6">{children}</div>
		</div>
	)
}
