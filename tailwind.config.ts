
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
				sans: ["Space Grotesk", "Inter", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
				display: ["Space Grotesk", "sans-serif"],
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
				// Enhanced custom theme colors
				royal: {
					DEFAULT: "#1A73E8",
					50: "#EBF2FE",
					100: "#D6E4FD",
					200: "#ADC9FB",
					300: "#85AEF9",
					400: "#5C93F7",
					500: "#1A73E8",
					600: "#155CB3",
					700: "#10457E",
					800: "#0B2E49",
					900: "#061714"
				},
				cyan: {
					DEFAULT: "#00FFFF",
					50: "#E6FFFF",
					100: "#CCFFFF",
					200: "#99FFFF",
					300: "#66FFFF",
					400: "#33FFFF",
					500: "#00FFFF",
					600: "#00CCCC",
					700: "#009999",
					800: "#006666",
					900: "#003333"
				},
				jet: {
					DEFAULT: "#0B0B0B",
					50: "#1A1A1A",
					100: "#171717",
					200: "#141414",
					300: "#111111",
					400: "#0E0E0E",
					500: "#0B0B0B",
					600: "#090909",
					700: "#060606",
					800: "#040404",
					900: "#020202"
				},
				snow: "#FAFAFA",
				neon: {
					DEFAULT: "#c2ff00",
					50: "#f7ffe6",
					100: "#efffcc",
					200: "#dfff99",
					300: "#cfff66",
					400: "#c2ff00",
					500: "#acdf00",
					600: "#98cc00",
					700: "#7ea600",
					800: "#658000",
					900: "#4c5900"
				},
				// Additional accent colors
				electric: "#00d4ff",
				magenta: "#ff006b",
				purple: "#8b5cf6",
				orange: "#ff8c00"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0) rotate(0deg)" },
					"33%": { transform: "translateY(-10px) rotate(1deg)" },
					"66%": { transform: "translateY(-5px) rotate(-1deg)" },
				},
				"float-reverse": {
					"0%, 100%": { transform: "translateY(0) rotate(0deg)" },
					"33%": { transform: "translateY(10px) rotate(-1deg)" },
					"66%": { transform: "translateY(5px) rotate(1deg)" },
				},
				glow: {
					"0%, 100%": { 
						boxShadow: "0 0 20px rgba(194, 255, 0, 0.3), 0 0 40px rgba(194, 255, 0, 0.1)" 
					},
					"50%": { 
						boxShadow: "0 0 40px rgba(194, 255, 0, 0.6), 0 0 80px rgba(194, 255, 0, 0.2)" 
					},
				},
				"glow-pulse": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.6" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(20px)" },
				},
				"scale-in": {
					"0%": { transform: "scale(0.9)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				"scale-out": {
					from: { transform: "scale(1)", opacity: "1" },
					to: { transform: "scale(0.9)", opacity: "0" },
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"slide-out-right": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100%)" },
				},
				"slide-in-left": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"slide-up": {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(0)" },
				},
				"bounce-gentle": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
				"rotate-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"pulse-scale": {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.05)" },
				},
				"gradient-x": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				"gradient-y": {
					"0%, 100%": { backgroundPosition: "50% 0%" },
					"50%": { backgroundPosition: "50% 100%" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.3s ease-out",
				"accordion-up": "accordion-up 0.3s ease-out",
				float: "float 6s ease-in-out infinite",
				"float-reverse": "float-reverse 8s ease-in-out infinite",
				glow: "glow 3s ease-in-out infinite",
				"glow-pulse": "glow-pulse 2s ease-in-out infinite",
				"fade-in": "fade-in 0.5s ease-out",
				"fade-out": "fade-out 0.5s ease-out",
				"scale-in": "scale-in 0.3s ease-out",
				"scale-out": "scale-out 0.3s ease-out",
				"slide-in-right": "slide-in-right 0.4s ease-out",
				"slide-out-right": "slide-out-right 0.4s ease-out",
				"slide-in-left": "slide-in-left 0.4s ease-out",
				"slide-up": "slide-up 0.4s ease-out",
				"bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
				shimmer: "shimmer 3s ease-in-out infinite",
				"rotate-slow": "rotate-slow 20s linear infinite",
				"spin-slow": "spin-slow 10s linear infinite",
				"pulse-scale": "pulse-scale 2s ease-in-out infinite",
				"gradient-x": "gradient-x 3s ease infinite",
				"gradient-y": "gradient-y 3s ease infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-mesh": "linear-gradient(135deg, #c2ff00 0%, #00ffff 25%, #ff00c2 50%, #c2ff00 100%)",
			},
			backdropBlur: {
				xs: '2px',
				'3xl': '64px',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100',
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
			},
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
