import forms from '@tailwindcss/forms'
import defaultTheme from 'tailwindcss/defaultTheme'
import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.tsx',
		flowbite.content()
	],

	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter Variable',
					'Open Sans Variable',
					...defaultTheme.fontFamily.sans
				]
			},
			maxWidth: {
				layout: 'var(--layout-max-width, 1600px)'
			},
			colors: {
				primary: 'var(--primary-color, #63ab45)',
				secondary: 'var(--secondary-color, #027a7c)',
				'primary-light': 'var(--primary-color-light, #cfe1c7)',
				'primary-saturated': 'var(--primary-color-saturated, #2c9600)',
				dark: 'var(--dark, #272727)',
				apple: {
					50: '#f1f9ec',
					100: '#e0f0d7',
					200: '#c3e3b3',
					300: '#9ed086',
					400: '#7cbc5f',
					500: '#63ab45',
					600: '#468030',
					700: '#376229',
					800: '#304f25',
					900: '#2b4423',
					950: '#13240f'
				}
			}
		}
	},

	plugins: [forms, flowbite.plugin()]
}
