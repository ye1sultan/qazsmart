/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ['Outfit', 'sans-serif'],
		},
	},
	plugins: [
		require("daisyui"),
		require('@tailwindcss/line-clamp')
	],
	daisyui: {
		themes: false,
	},
}