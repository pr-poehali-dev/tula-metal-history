import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./1778145678267013929.html"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				cormorant: ['"Cormorant Garamond"', 'serif'],
				cormorant2: ['Cormorant', 'serif'],
				oswald: ['Oswald', 'sans-serif'],
				fell: ['"IM Fell English"', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				parchment: {
					50: '#fdf8f0',
					100: '#f9eedc',
					200: '#f2dcb8',
					300: '#e8c48a',
					400: '#dba55a',
					500: '#c8883a',
					600: '#a8682c',
				},
				iron: {
					50: '#f4f4f4',
					100: '#e0e0e0',
					200: '#b8b8b8',
					300: '#8a8a8a',
					400: '#5c5c5c',
					500: '#3a3a3a',
					600: '#2a2a2a',
					700: '#1c1c1c',
					800: '#121212',
					900: '#080808',
				},
				gold: {
					300: '#e8c84a',
					400: '#d4a820',
					500: '#b8900a',
					600: '#8a6a00',
				},
				rust: {
					400: '#b84a2a',
					500: '#8a3018',
					600: '#6a200c',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-slow': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(40px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'fade-in-slow': 'fade-in-slow 1.5s ease-out forwards',
				'slide-up': 'slide-up 0.9s ease-out forwards',
				'flicker': 'flicker 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
