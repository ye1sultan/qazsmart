/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			mont: ['Montserrat', 'sans-serif'],
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	]
}