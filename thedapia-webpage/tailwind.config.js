/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        104: '26rem',
        128: '32rem',
        192: '48rem',
        208: '52rem',
        224: '56rem',
        256: '64rem',
      },
      transitionDuration: {
        '1800': '1800ms',
      },
    },
  },
  plugins: [],
}

