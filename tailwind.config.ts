import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "#111318",
				"background-light": "#ffffff",
				"background-dark": "#101622",
				accent: "#f4f4f4",
			},
			fontFamily: {
				display: ["var(--font-inter)", "sans-serif"],
				serif: ["var(--font-playfair)", "serif"],
				mono: ["var(--font-space-mono)", "monospace"],
				logo: ["var(--font-josefin)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
