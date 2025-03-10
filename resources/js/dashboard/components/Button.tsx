import { cn } from '@/utils/utils'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	icon?: React.ReactNode
	iconEnd?: boolean
}

const Base = ({ text, icon, iconEnd, ...props }: ButtonProps) => {
	return (
		<button
			type="button"
			className={cn(
				'flex items-center gap-1 rounded bg-gray-800 px-5 py-2.5 text-sm font-medium text-white transition',
				'focus-within:bg-gray-900',
				'hover:bg-gray-900'
			)}
			{...props}
		>
			{icon !== undefined && iconEnd !== true && icon}
			<span>{text}</span>
			{icon !== undefined && iconEnd === true && icon}
		</button>
	)
}

const Simple = ({ text, icon, iconEnd, ...props }: ButtonProps) => {
	return (
		<button
			type="button"
			className={cn(
				'flex items-center gap-1 rounded border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 transition',
				'focus-within:bg-gray-50 focus-within:text-gray-800',
				'hover:bg-gray-50 hover:text-gray-800 active:bg-gray-100'
			)}
			{...props}
		>
			{icon !== undefined && iconEnd !== true && icon}
			<span>{text}</span>
			{icon !== undefined && iconEnd === true && icon}
		</button>
	)
}

export const Button = {
	Base,
	Simple
}
