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
        dark: 'var(--dark, #272727)'
      }
    }
  },

  plugins: [forms, flowbite.plugin()]
}
