/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
		colors: {
			'primary': '#0F0F0F',
			'accent': '#00A896',
			'soft': '#6D28D9',
			'light': '#D9D9D9',
			'warning': '#FF4B5C',

		},
		},
	},
	plugins: [],
}

