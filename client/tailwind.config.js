/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(var(--color-dark))",
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        tertiary: 'rgb(var(--color-tertiary))',
        gray: 'rgb(var(--color-gray))',
        white: "rgb(var(--color-white))",
        "white-transparent": "rgb(var(--color-white-transparent) / 0.05)",
      }
    },
  },
  plugins: [],
}

