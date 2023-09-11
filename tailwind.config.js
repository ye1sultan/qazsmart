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
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	]
}