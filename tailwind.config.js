/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',

				'lochmara': {
					'50': '#f0f9ff',
					'100': '#e0f1fe',
					'200': '#bbe5fc',
					'300': '#7fd0fa',
					'400': '#3bb8f5',
					'500': '#11a0e6',
					'600': '#0589d3',
					'700': '#05659f',
					'800': '#095683',
					'900': '#0d486d',
					'950': '#092e48',
				},

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
