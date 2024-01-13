/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        128: '32rem',
        192: '48rem',
        256: '64rem',
      },
      transitionDuration: {
        '1800': '1800ms',
      },
    },
  },
  plugins: [],
}

