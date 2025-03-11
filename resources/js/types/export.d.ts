import { PropsWithChildren } from 'react'

export interface LayoutProps extends PropsWithChildren {
	title?: string
	description?: string
	imgUrl?: string
	url?: string
}
