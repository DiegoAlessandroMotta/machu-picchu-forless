import '@fontsource-variable/inter'
import '@fontsource-variable/open-sans'
import '../css/app.css'
import './bootstrap'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'

// const appName = import.meta.env.VITE_APP_NAME || 'Machu Picchu Forless'

createInertiaApp({
	// title: (title) => `${title} - ${appName}`,
	title: (title) => `${title}`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.tsx`,
			import.meta.glob('./Pages/**/*.tsx')
		),
	setup({ el, App, props }) {
		const root = createRoot(el)

		root.render(<App {...props} />)
	},
	progress: {
		color: '#111111'
	}
})
