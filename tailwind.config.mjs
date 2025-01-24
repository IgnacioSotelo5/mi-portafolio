/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				foreground: {
					100: "#fffdfb",
    				150: "#fff9f4",
    				200: "#ffedde",
    				250: "#f2ddcc",
    				300: "#e3cbbc",
    				350: "#bba5a0",
    				400: "#a2898c",
    				450: "#867073",
    				550: "#6d585b",
    				600: "#604d4f",
    				650: "#524144",
    				700: "#463739",
    				750: "#392d2e",
    				800: "#2d2224",
    				850: "#21191a",
    				900: "#150f10",
			}
		},
		keyframes: {
			navShadownDark: {
					'0%': { padding: '0 0.5rem' },
					'100%': {
						backgroundColor: 'rgba(71, 85, 105, 0.5)',
						padding: '0 12px',
						backdropFilter: 'blur(4px)',
						zIndex: '30',
						borderRadius: '9999px'
					}
			},
			navShadownLight: {
				'0%': { padding: '0 0.5rem', backdropFilter: 'blur(1px)' },
				'100%': {
					backgroundColor: 'rgba(225, 225, 255, .8)',
					padding: '0 12px',
					backdropFilter: 'blur(3px)',
					zIndex: '30',
					borderRadius: '9999px',
					boxShadow: '0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)',
					border: '1px solid #cbd5e1'
				}
			}
		},
		animation: {
			navShadownDark: 'navShadownDark 1s linear both',
			navShadownLight: 'navShadownLight 1s linear both'
		}
		},
		gridTemplateColumns: {
			'responsive': 'repeat(auto-fit, minmax(300px, 1fr))'
		}
	},
	plugins: [],
}
