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
			'accent_pade': '#001311',
			'soft': '#6D28D9',
			'light': '#D9D9D9',
			'warning': '#FF4B5C',
			'gray': '#1e2824'

			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				fadeIn: 'fadeIn 2s ease-in-out',
				fadeInLate: 'fadeIn 3.5s ease-in-out',
			},
			
		},
	},
	plugins: [],
}

