/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','Poppins','system-ui','-apple-system','Segoe UI','Roboto','sans-serif'],
      },
      colors: {
        primary: '#1976d2',
        secondary: '#6a5a',
        accent: '#42a5f5'
      }
    }
  },
  plugins: [],
}
