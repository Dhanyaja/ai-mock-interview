/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "oklch(var(--primary) / <alpha-value>)",
        "primary-foreground": "oklch(var(--primary-foreground) / <alpha-value>)"
      },
    },
  },
  plugins: [],
}