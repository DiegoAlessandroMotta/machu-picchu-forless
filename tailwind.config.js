import forms from '@tailwindcss/forms'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['OpenSans', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        layout: '1600px',
      },
      colors: {
        primary: 'var(--primary-color)',
        'primary-light': 'var(--primary-color-light)',
      },
    },
  },

  plugins: [forms],
}
